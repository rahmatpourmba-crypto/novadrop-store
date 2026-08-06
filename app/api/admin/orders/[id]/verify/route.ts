import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/session";
import { getOrder, getPaymentForOrder, markPaymentPaid, updateOrderStatus } from "@/lib/orders";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const uid = await getSessionUserId();
  if (!uid) return unauthorized();

  const { id } = await params;
  const order = await getOrder(id);
  if (!order) return NextResponse.json({ error: "Order not found." }, { status: 404 });

  const body = await req.json();
  const txid = String(body.txid || "").trim();
  if (!txid) return NextResponse.json({ error: "Transaction ID is required." }, { status: 400 });

  const payment = await getPaymentForOrder(id);
  if (!payment) {
    return NextResponse.json({ error: "No payment found for this order." }, { status: 400 });
  }

  await markPaymentPaid(payment.id, txid);
  await updateOrderStatus(id, "paid");

  return NextResponse.json({ ok: true });
}
