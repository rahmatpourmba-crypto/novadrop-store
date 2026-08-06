import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { getOrder, getPaymentForOrder, markPaymentPaid, updateOrderStatus } from "@/lib/orders";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const orderId = String(body.orderId || "");
    const txid = String(body.txid || "").trim();

    if (!orderId || !txid) {
      return NextResponse.json({ error: "Missing order or transaction ID." }, { status: 400 });
    }

    const order = await getOrder(orderId);
    if (!order) {
      return NextResponse.json({ error: "Order not found." }, { status: 404 });
    }

    const payment = await getPaymentForOrder(orderId);
    if (!payment || payment.status !== "pending") {
      return NextResponse.json({ error: "No pending payment found for this order." }, { status: 400 });
    }

    await db.run("UPDATE payments SET txid = ?, updated_at = datetime('now') WHERE id = ?", [
      txid,
      payment.id,
    ]);

    const s = await getSettings();
    if (s.auto_approve_manual === "1") {
      await markPaymentPaid(payment.id, txid);
      await updateOrderStatus(orderId, "paid");
      return NextResponse.json({ ok: true, approved: true });
    }

    return NextResponse.json({ ok: true, approved: false });
  } catch {
    return NextResponse.json({ error: "Could not confirm payment." }, { status: 500 });
  }
}
