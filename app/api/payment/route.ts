import { NextResponse } from "next/server";
import QRCode from "qrcode";
import { db } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { getOrder, getPaymentForOrder, createPayment } from "@/lib/orders";
import {
  getCryptoRates,
  cryptoAmount,
  isNowPaymentsConfigured,
  createNowPaymentsPayment,
  manualAddress,
  CRYPTO_CURRENCIES,
  type CryptoCurrency,
} from "@/lib/payments";
import { uuid } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const orderId = String(body.orderId || "");
    const currency = String(body.currency || "usdt").toLowerCase();

    if (!orderId || !CRYPTO_CURRENCIES.some((c) => c.code === currency)) {
      return NextResponse.json({ error: "Invalid payment request." }, { status: 400 });
    }

    const order = await getOrder(orderId);
    if (!order) {
      return NextResponse.json({ error: "Order not found." }, { status: 404 });
    }
    if (order.status !== "pending") {
      return NextResponse.json({ error: "This order is already paid." }, { status: 400 });
    }

    const existingPaid = await db.get(
      "SELECT id FROM payments WHERE order_id = ? AND status = 'paid'",
      [orderId]
    );
    if (existingPaid) {
      return NextResponse.json({ error: "This order is already paid." }, { status: 400 });
    }

    await db.run("DELETE FROM payments WHERE order_id = ? AND status = 'pending'", [orderId]);

    const s = await getSettings();
    const rates = await getCryptoRates();
    const meta = CRYPTO_CURRENCIES.find((c) => c.code === currency)!;
    const cc = currency as CryptoCurrency;

    let address = "";
    let amountCrypto = 0;
    let provider = "manual";
    let externalId = "";
    let amountUsd = order.total;

    if (isNowPaymentsConfigured(s)) {
      try {
        const res = await createNowPaymentsPayment({
          apiKey: s.nowpayments_api_key,
          priceAmount: order.total,
          priceCurrency: order.currency || "usd",
          payCurrency: cc,
          orderId: order.id,
        });
        provider = "nowpayments";
        address = res.pay_address;
        amountCrypto = parseFloat(res.pay_amount) || cryptoAmount(order.total, rates[currency], meta.fixed);
        externalId = String(res.payment_id);
      } catch (err) {
        const msg = err instanceof Error ? err.message : "NowPayments error";
        return NextResponse.json({ error: `Crypto gateway error: ${msg}` }, { status: 502 });
      }
    } else {
      address = manualAddress(s, cc);
      if (!address) {
        return NextResponse.json(
          {
            error: `No ${meta.symbol} wallet is configured for this store yet. Please contact support.`,
          },
          { status: 422 }
        );
      }
      amountCrypto = cryptoAmount(order.total, rates[currency], meta.fixed);
    }

    const paymentId = uuid();
    await createPayment({
      id: paymentId,
      orderId,
      provider,
      currency,
      amountUsd,
      amountCrypto,
      address,
      externalId,
    });

    const qrData = address;
    const qrDataUrl = await QRCode.toDataURL(qrData, {
      margin: 1,
      width: 260,
      color: { dark: "#111827", light: "#ffffff" },
    });

    return NextResponse.json({
      paymentId,
      orderId,
      currency,
      provider,
      address,
      amount: amountCrypto,
      amountFixed: meta.fixed,
      amountUsd,
      qr: qrDataUrl,
    });
  } catch {
    return NextResponse.json({ error: "Could not create payment." }, { status: 500 });
  }
}
