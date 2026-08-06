import { getSettings, numSetting } from "./settings";

export type CryptoCurrency = "btc" | "eth" | "usdt" | "ltc";

export const CRYPTO_CURRENCIES: Array<{
  code: CryptoCurrency;
  name: string;
  symbol: string;
  fixed: number;
}> = [
  { code: "btc", name: "Bitcoin", symbol: "BTC", fixed: 8 },
  { code: "eth", name: "Ethereum", symbol: "ETH", fixed: 8 },
  { code: "usdt", name: "USDT (TRC-20)", symbol: "USDT", fixed: 2 },
  { code: "ltc", name: "Litecoin", symbol: "LTC", fixed: 8 },
];

export interface RateCache {
  at: number;
  rates: Record<string, number>;
}

let cache: RateCache | null = null;

const FALLBACK_RATES: Record<string, number> = {
  btc: 65000,
  eth: 3400,
  usdt: 1,
  ltc: 85,
};

export async function getCryptoRates(): Promise<Record<string, number>> {
  if (cache && Date.now() - cache.at < 5 * 60_000) return cache.rates;

  const s = getSettings();
  const manual: Record<string, number> = {};
  for (const c of CRYPTO_CURRENCIES) {
    const v = parseFloat(s[`exchange_${c.code}`] ?? "");
    if (Number.isFinite(v) && v > 0) manual[c.code] = v;
  }
  if (manual.btc && manual.eth && manual.usdt && manual.ltc) {
    cache = { at: Date.now(), rates: manual };
    return manual;
  }

  try {
    const ids = "bitcoin,ethereum,tether,litecoin";
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`,
      { cache: "no-store", signal: AbortSignal.timeout(8000) }
    );
    if (res.ok) {
      const data = (await res.json()) as Record<string, Record<string, number>>;
      const rates = {
        btc: data.bitcoin?.usd ?? FALLBACK_RATES.btc,
        eth: data.ethereum?.usd ?? FALLBACK_RATES.eth,
        usdt: data.tether?.usd ?? FALLBACK_RATES.usdt,
        ltc: data.litecoin?.usd ?? FALLBACK_RATES.ltc,
      };
      cache = { at: Date.now(), rates: { ...rates, ...manual } };
      return cache.rates;
    }
  } catch {
    // fall through to manual / static rates
  }

  cache = { at: Date.now(), rates: { ...FALLBACK_RATES, ...manual } };
  return cache.rates;
}

export function cryptoAmount(usd: number, rate: number, fixed: number): number {
  const raw = usd / rate;
  const f = Math.pow(10, fixed);
  return Math.max(Math.round(raw * f) / f, 0.00000001);
}

export function roundCrypto(n: number, fixed: number): number {
  const f = Math.pow(10, fixed);
  return Math.round(n * f) / f;
}

export function manualAddress(s: Record<string, string>, code: CryptoCurrency): string {
  const key = code === "usdt" ? "address_usdt_trc20" : `address_${code}`;
  return s[key] ?? "";
}

export function isNowPaymentsConfigured(s: Record<string, string>): boolean {
  return !!(s.nowpayments_api_key && s.nowpayments_api_key.trim().length > 0);
}

export interface NowPaymentsCreateResult {
  payment_id: number;
  pay_address: string;
  pay_amount: string;
  pay_currency: string;
  status: string;
}

export async function createNowPaymentsPayment(opts: {
  apiKey: string;
  priceAmount: number;
  priceCurrency: string;
  payCurrency: CryptoCurrency;
  orderId: string;
}): Promise<NowPaymentsCreateResult> {
  const body = {
    price_amount: opts.priceAmount,
    price_currency: opts.priceCurrency,
    pay_currency: opts.payCurrency,
    order_id: opts.orderId,
    order_description: `Order ${opts.orderId}`,
    is_fixed_rate: true,
  };
  const res = await fetch("https://api.nowpayments.io/v1/payment", {
    method: "POST",
    headers: {
      "x-api-key": opts.apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`NowPayments error ${res.status}: ${text}`);
  }
  const data = (await res.json()) as NowPaymentsCreateResult;
  return data;
}

export async function checkNowPaymentsStatus(
  apiKey: string,
  paymentId: string
): Promise<string> {
  const res = await fetch(`https://api.nowpayments.io/v1/payment/${paymentId}`, {
    headers: { "x-api-key": apiKey },
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) return "unknown";
  const data = (await res.json()) as { payment_status?: string };
  return data.payment_status ?? "unknown";
}

export function normalizeNowPaymentsStatus(status: string): "paid" | "pending" | "failed" {
  switch (status) {
    case "confirmed":
    case "finished":
    case "partially_paid":
      return "paid";
    case "failed":
    case "cancelled":
    case "expired":
      return "failed";
    default:
      return "pending";
  }
}

export function getDefaultCryptoCodes(): CryptoCurrency[] {
  return ["btc", "usdt", "eth", "ltc"];
}
