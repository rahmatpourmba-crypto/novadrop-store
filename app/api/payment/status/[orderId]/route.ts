import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { getOrder, getPaymentForOrder, updateOrderStatus, markPaymentPaid } from "@/lib/orders";
import { checkNowPaymentsStatus, normalizeNowPaymentsStatus } from "@/lib/payments";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  const { orderId } = await params;
  const order = getOrder(orderId);
  if (!order) {
    return NextResponse.json({ status: "not_found" }, { status: 404 });
  }

  const payment = getPaymentForOrder(orderId);
  if (!payment) {
    return NextResponse.json({
      status: "no_payment",
      orderStatus: order.status,
    });
  }

  let paymentStatus = payment.status;

  if (
    paymentStatus === "pending" &&
    payment.provider === "nowpayments" &&
    payment.external_id
  ) {
    const s = getSettings();
    if (s.nowpayments_api_key) {
      const npStatus = await checkNowPaymentsStatus(
        s.nowpayments_api_key,
        payment.external_id
      );
      const normalized = normalizeNowPaymentsStatus(npStatus);
      if (normalized === "paid") {
        markPaymentPaid(payment.id, payment.txid || "");
        paymentStatus = "paid";
      } else if (normalized === "failed") {
        db.prepare("UPDATE payments SET status = 'failed', updated_at = datetime('now') WHERE id = ?").run(payment.id);
        paymentStatus = "failed";
      }
    }
  }

  if (paymentStatus === "paid" && order.status === "pending") {
    updateOrderStatus(order.id, "paid");
  }

  return NextResponse.json({
    status: paymentStatus,
    txid: payment.txid,
    orderStatus: order.status,
  });
}
