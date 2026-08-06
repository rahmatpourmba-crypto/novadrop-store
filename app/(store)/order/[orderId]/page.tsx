import Link from "next/link";
import { notFound } from "next/navigation";
import { getOrder, getOrderItems, getPaymentForOrder } from "@/lib/orders";
import { formatPrice, formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

const STEPS: Array<{ key: string; label: string; hint: string }> = [
  { key: "pending", label: "Order placed", hint: "Payment pending" },
  { key: "paid", label: "Paid", hint: "Payment confirmed" },
  { key: "processing", label: "Processing", hint: "Being packed by our supplier" },
  { key: "shipped", label: "Shipped", hint: "Handed to carrier" },
  { key: "delivered", label: "Delivered", hint: "Arrived at destination" },
];

export default async function OrderStatusPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const order = await getOrder(orderId);
  if (!order) notFound();

  const items = getOrderItems(order);
  const payment = await getPaymentForOrder(orderId);

  const orderIdx = STEPS.findIndex((s) => s.key === order.status);
  const currentIdx = order.status === "cancelled" ? -1 : orderIdx;
  const cancelled = order.status === "cancelled";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-2xl border border-gray-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold">Order {order.id}</h1>
            <p className="mt-1 text-sm text-gray-500">
              Placed {formatDate(order.created_at)} · {order.currency}
            </p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
              cancelled
                ? "bg-red-100 text-red-700"
                : order.status === "delivered"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-gray-900 text-white"
            }`}
          >
            {cancelled ? "Cancelled" : order.status}
          </span>
        </div>

        {cancelled ? (
          <div className="mt-8 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            This order was cancelled.
          </div>
        ) : (
          <div className="mt-8 flex items-start">
            {STEPS.map((step, i) => {
              const done = i < currentIdx;
              const active = i === currentIdx;
              return (
                <div key={step.key} className="relative flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`grid h-9 w-9 place-items-center rounded-full text-xs font-bold ${
                        done
                          ? "bg-emerald-500 text-white"
                          : active
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {done ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    <div className={`mt-2 text-center text-xs font-semibold ${active ? "text-gray-900" : "text-gray-400"}`}>
                      {step.label}
                    </div>
                    <div className="mt-0.5 hidden text-center text-[10px] text-gray-400 sm:block">{step.hint}</div>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className={`absolute left-1/2 top-[18px] h-0.5 w-full ${
                        i < currentIdx ? "bg-emerald-500" : "bg-gray-100"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {order.tracking && !cancelled && (
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm">
            <span className="font-semibold">Tracking number:</span>{" "}
            <span className="font-mono">{order.tracking}</span>
          </div>
        )}

        {payment && payment.txid && (
          <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm">
            <span className="font-semibold">Transaction ID:</span>{" "}
            <span className="font-mono break-all">{payment.txid}</span>
          </div>
        )}
      </div>

      {order.customer && (
        <div className="mt-6 rounded-2xl border border-gray-200 p-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">Shipping address</h2>
          <p className="text-sm text-gray-700">
            {order.customer.name}
            <br />
            {order.customer.address}
            <br />
            {order.customer.city}, {order.customer.country} {order.customer.zip}
          </p>
        </div>
      )}

      <div className="mt-6 rounded-2xl border border-gray-200 p-6">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">Items</h2>
        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it.product_id} className="flex items-center gap-3 text-sm">
              <span className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.image} alt="" className="h-full w-full object-cover" />
              </span>
              <Link href={`/product/${it.slug}`} className="flex-1 font-medium hover:text-gray-600">
                {it.title}
              </Link>
              <span className="text-gray-500">× {it.qty}</span>
              <span className="font-semibold">{formatPrice(it.price * it.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-gray-200 pt-3 text-sm">
          <div className="flex justify-between text-gray-500">
            <span>Shipping</span>
            <span>{order.shipping === 0 ? "Free" : formatPrice(order.shipping)}</span>
          </div>
          <div className="mt-1 flex justify-between font-bold">
            <span>Total</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/shop" className="text-sm font-semibold text-gray-900 hover:underline">
          Continue shopping →
        </Link>
      </div>
    </div>
  );
}
