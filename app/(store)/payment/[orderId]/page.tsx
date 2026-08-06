import Link from "next/link";
import { notFound } from "next/navigation";
import { getOrder, getOrderItems, getPaymentForOrder } from "@/lib/orders";
import { formatPrice } from "@/lib/utils";
import PaymentClient from "./PaymentClient";

export const dynamic = "force-dynamic";

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const order = await getOrder(orderId);
  if (!order) notFound();

  const items = getOrderItems(order);
  const payment = await getPaymentForOrder(orderId);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Pay with cryptocurrency</h1>
      <p className="mt-2 text-sm text-gray-500">
        Order <span className="font-mono font-semibold text-gray-900">{order.id}</span> ·{" "}
        {formatPrice(order.total)}
      </p>

      <div className="mt-6 rounded-2xl border border-gray-200 p-5">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">Order summary</h2>
        <ul className="space-y-2">
          {items.map((it) => (
            <li key={it.product_id} className="flex items-center justify-between gap-3 text-sm">
              <span className="flex items-center gap-2 text-gray-700">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gray-100 text-xs font-bold">
                  {it.qty}
                </span>
                {it.title}
              </span>
              <span className="font-medium">{formatPrice(it.price * it.qty)}</span>
            </li>
          ))}
          <li className="flex justify-between text-sm text-gray-500">
            <span>Shipping</span>
            <span>{order.shipping === 0 ? "Free" : formatPrice(order.shipping)}</span>
          </li>
          <li className="flex justify-between border-t border-gray-200 pt-2 font-bold">
            <span>Total</span>
            <span>{formatPrice(order.total)}</span>
          </li>
        </ul>
      </div>

      <PaymentClient orderId={order.id} totalUsd={order.total} currency={order.currency} initialPayment={payment ?? null} />
    </div>
  );
}
