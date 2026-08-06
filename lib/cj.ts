import { getSettings } from "./settings";

export const CJ_BASE = "https://developers.cjdropshipping.com/api2.0/v1";

let tokenCache: { at: number; accessToken: string } | null = null;

export interface CjConfig {
  apiKey: string;
  fromCountryCode: string;
  logisticName: string;
  payType: string;
}

export async function getCjConfig(): Promise<CjConfig> {
  const s = await getSettings();
  return {
    apiKey: (s.cj_api_key ?? "").trim(),
    fromCountryCode: (s.cj_from_country ?? "CN").trim().toUpperCase() || "CN",
    logisticName: (s.cj_logistic_name ?? "").trim(),
    payType: (s.cj_pay_type ?? "").trim() || "3",
  };
}

interface CjEnvelope<T> {
  code: number;
  result: boolean;
  message?: string;
  data: T;
}

async function request<T>(path: string, opts: {
  method?: string;
  token?: string;
  body?: unknown;
  cache?: RequestCache;
} = {}): Promise<T> {
  const res = await fetch(`${CJ_BASE}${path}`, {
    method: opts.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(opts.token ? { "CJ-Access-Token": opts.token } : {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
    cache: opts.cache ?? "no-store",
    signal: AbortSignal.timeout(20000),
  });
  const text = await res.text();
  let data: CjEnvelope<T>;
  try {
    data = JSON.parse(text) as CjEnvelope<T>;
  } catch {
    throw new Error(`CJ request failed (HTTP ${res.status}): ${text.slice(0, 300)}`);
  }
  if (!res.ok || (data.code !== undefined && data.code !== 200)) {
    throw new Error(`CJ error ${data.code ?? res.status}: ${data.message ?? text.slice(0, 300)}`);
  }
  return data.data;
}

export async function getAccessToken(apiKey: string): Promise<string> {
  if (tokenCache && tokenCache.accessToken) return tokenCache.accessToken;
  if (!apiKey) throw new Error("CJ API key is not configured. Add it in Admin > Settings.");
  const data = await request<{ accessToken: string }>("/authentication/getAccessToken", {
    method: "POST",
    body: { apiKey },
  });
  if (!data?.accessToken) throw new Error("CJ returned no access token.");
  tokenCache = { at: Date.now(), accessToken: data.accessToken };
  return data.accessToken;
}

export interface CjProduct {
  id: string;
  nameEn: string;
  sku: string;
  spu: string;
  bigImage: string;
  sellPrice: string;
  nowPrice: string;
  discountPrice: string;
  warehouseInventoryNum: number;
  deliveryCycle: string;
  threeCategoryName: string;
}

export async function searchProducts(keyword: string, page = 1, size = 12): Promise<CjProduct[]> {
  const cfg = await getCjConfig();
  const token = await getAccessToken(cfg.apiKey);
  const q = new URLSearchParams({ page: String(page), size: String(size) });
  if (keyword) q.set("keyWord", keyword);
  const data = await request<{ content: Array<{ productList: CjProduct[] }> }>(
    `/product/listV2?${q.toString()}`,
    { token }
  );
  return data?.content?.flatMap((c) => c.productList ?? []) ?? [];
}

export interface CjVariant {
  vid: string;
  variantSku: string;
  variantNameEn: string;
  variantName: string;
  variantImage: string;
  variantSellPrice: string;
  variantStock: number;
  variantWeight: number;
  variantKey: string;
}

export interface CjProductDetail {
  pid: string;
  productNameEn: string;
  productImage: string;
  variants: CjVariant[];
}

export async function getVariants(pid: string): Promise<CjProductDetail> {
  const cfg = await getCjConfig();
  const token = await getAccessToken(cfg.apiKey);
  const data = await request<CjProductDetail>(`/product/variant/query?pid=${encodeURIComponent(pid)}`, {
    token,
  });
  return data;
}

export async function getVariantBySku(variantSku: string): Promise<CjProductDetail | null> {
  const cfg = await getCjConfig();
  const token = await getAccessToken(cfg.apiKey);
  const data = await request<CjProductDetail>(
    `/product/variant/query?variantSku=${encodeURIComponent(variantSku)}`,
    { token }
  );
  return data?.pid ? data : null;
}

export interface CjFreightOption {
  logisticName: string;
  logisticPrice: number;
  logisticAging: string;
}

export async function freightCalculate(lines: Array<{ vid: string; quantity: number }>, endCountryCode: string): Promise<CjFreightOption[]> {
  const cfg = await getCjConfig();
  const token = await getAccessToken(cfg.apiKey);
  const data = await request<CjFreightOption[]>("/logistic/freightCalculate", {
    method: "POST",
    token,
    body: {
      startCountryCode: cfg.fromCountryCode,
      endCountryCode,
      products: lines,
    },
  });
  return data ?? [];
}

export interface CjCreateOrderInput {
  orderNumber: string;
  shipping: {
    name: string;
    phone: string;
    email: string;
    address: string;
    address2: string;
    city: string;
    province: string;
    zip: string;
    country: string;
    countryCode: string;
  };
  lines: Array<{ vid: string; quantity: number; storeLineItemId: string }>;
  logisticName: string;
  remark?: string;
}

export interface CjCreateOrderResult {
  orderId: string;
  orderNumber: string;
  orderAmount: string;
  productAmount: string;
  postageAmount: string;
  cjPayUrl: string;
}

export async function createOrder(input: CjCreateOrderInput): Promise<CjCreateOrderResult> {
  const cfg = await getCjConfig();
  const token = await getAccessToken(cfg.apiKey);
  const data = await request<CjCreateOrderResult>("/shopping/order/createOrderV2", {
    method: "POST",
    token,
    body: {
      orderNumber: input.orderNumber.slice(0, 50),
      shippingZip: input.shipping.zip,
      shippingCountryCode: input.shipping.countryCode,
      shippingCountry: input.shipping.country,
      shippingProvince: input.shipping.province || input.shipping.city,
      shippingCity: input.shipping.city,
      shippingCounty: "",
      shippingPhone: input.shipping.phone,
      shippingCustomerName: input.shipping.name,
      shippingAddress: input.shipping.address,
      shippingAddress2: input.shipping.address2,
      email: input.shipping.email,
      remark: input.remark ?? "",
      payType: cfg.payType,
      logisticName: input.logisticName,
      fromCountryCode: cfg.fromCountryCode,
      iossType: "",
      iossNumber: "",
      orderFlow: 1,
      products: input.lines,
    },
  });
  if (!data?.orderId) {
    throw new Error("CJ did not return an order id.");
  }
  return data;
}

export interface CjOrderInfo {
  orderId: string;
  orderNumber: string;
  orderStatus: string;
  trackingNumber: string;
}

export async function queryOrder(orderId: string): Promise<CjOrderInfo | null> {
  const cfg = await getCjConfig();
  const token = await getAccessToken(cfg.apiKey);
  try {
    const data = await request<CjOrderInfo>(`/shopping/order/query?orderId=${encodeURIComponent(orderId)}`, {
      token,
    });
    return data;
  } catch {
    return null;
  }
}

export function isCjProduct(row: { supplier?: string | null }): boolean {
  return (row.supplier ?? "").toUpperCase() === "CJ";
}
