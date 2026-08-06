import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { markPaymentPaid, updateOrderStatus } from "@/lib/orders";
import { normalizeNowPaymentsStatus } from "@/lib/payments";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const s = getSettings();
    const apiKey = s.nowpayments_api_key;
    if (!apiKey) {
      return new NextResponse("Not configured", { status: 403 });
    }

    const body = await req.json();

    // Optional signature verification with IPN secret
    const signature = req.headers.get("x-nowpayments-sig");
    if (signature && s.nowpayments_ipn_secret) {
      const crypto = await import("node:crypto");
      const expected = crypto
        .createHmac("sha512", s.nowpayments_ipn_secret)
        .update(JSON.stringify(body))
        .digest("hex");
      if (signature !== expected) {
        return new NextResponse("Invalid signature", { status: 401 });
      }
    }

    const paymentId = String(body.payment_id || "");
    const status = String(body.payment_status || "");
    const txid = String(body.actual_payment_id || "");

    const payment = db
      .prepare("SELECT id, order_id FROM payments WHERE external_id = ?")
      .get(paymentId) as { id: string; order_id: string } | undefined;

    if (!payment) {
      return new NextResponse("OK", { status: 200 });
    }

    const normalized = normalizeNowPaymentsStatus(status);
    if (normalized === "paid") {
      markPaymentPaid(payment.id, txid);
      updateOrderStatus(payment.order_id, "paid");
    } else if (normalized === "failed") {
      db.prepare("UPDATE payments SET status = 'failed', updated_at = datetime('now') WHERE id = ?").run(payment.id);
    }

    return new NextResponse("OK", { status: 200 });
  } catch {
    return new NextResponse("OK", { status: 200 });
  }
}
