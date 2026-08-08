import { notFound } from "next/navigation";
import Link from "next/link";
import { getOrder, getOrderItems, getPaymentForOrder, getCustomer, orderProfit } from "@/lib/orders";
import { getSettings } from "@/lib/settings";
import { formatPrice, formatDate } from "@/lib/utils";
import OrderActions from "./OrderActions";
import CjShipButton from "./CjShipButton";
import CopyButton from "../../components/CopyButton";

export const dynamic = "force-dynamic";

export default async function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await getOrder(id);
  if (!order) notFound();

  const items = getOrderItems(order);
  const payment = await getPaymentForOrder(id);
  const customer = await getCustomer(order.customer_id);
  const s = await getSettings();

  const supplierLines = [
    `New order ${order.id}`,
    "",
    "ITEMS:",
    ...items.map((i) => `- ${i.qty}x [${i.supplier_sku}] ${i.title}`),
    "",
    `Subtotal: ${formatPrice(order.subtotal)}`,
    `Shipping: ${order.shipping === 0 ? "Free" : formatPrice(order.shipping)}`,
    `Total: ${formatPrice(order.total)}`,
    "",
    "SHIP TO:",
    customer ? `${customer.name}, ${customer.address}, ${customer.city}, ${customer.country} ${customer.zip}` : "",
    customer ? `Phone: ${customer.phone}` : "",
    `Email: ${customer?.email}`,
  ].join("\n");

  const mailto = `mailto:${s.supplier_email || ""}?subject=${encodeURIComponent(
    `New order ${order.id}`
  )}&body=${encodeURIComponent(supplierLines)}`;

  const statusColor: Record<string, string> = {
    pending: "bg-amber-100 text-amber-700",
    paid: "bg-sky-100 text-sky-700",
    processing: "bg-indigo-100 text-indigo-700",
    shipped: "bg-purple-100 text-purple-700",
    delivered: "bg-emerald-100 text-emerald-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div>
      <Link href="/admin/orders" className="text-sm font-semibold text-gray-900 hover:underline">
        ← Back to orders
      </Link>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold font-mono">{order.id}</h1>
          <p className="mt-1 text-sm text-gray-500">
            Placed {formatDate(order.created_at)}
          </p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${statusColor[order.status] || "bg-gray-100 text-gray-700"}`}>
          {order.status}
        </span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="mb-4 font-bold">Items</h2>
            <ul className="divide-y divide-gray-100">
              {items.map((it) => (
                <li key={it.product_id} className="flex items-center gap-3 py-3">
                  <span className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={it.image} alt="" className="h-full w-full object-cover" />
                  </span>
                  <div className="flex-1">
                    <div className="font-medium">{it.title}</div>
                    <div className="text-xs text-gray-400">
                      {it.supplier_sku ? `SKU: ${it.supplier_sku}` : ""} · {it.supplier}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">× {it.qty}</div>
                  <div className="font-semibold">{formatPrice(it.price * it.qty)}</div>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-gray-200 pt-3 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
              <div className="mt-1 flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>{order.shipping === 0 ? "Free" : formatPrice(order.shipping)}</span>
              </div>
              <div className="mt-2 flex justify-between font-bold">
                <span>Total</span>
                <span>{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>

          {payment && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="mb-4 font-bold">Payment</h2>
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase text-gray-400">Status</div>
                  <div className="mt-1 font-semibold">{payment.status}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-gray-400">Currency</div>
                  <div className="mt-1 font-semibold">{payment.currency.toUpperCase()}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-gray-400">Amount</div>
                  <div className="mt-1 font-semibold">
                    {payment.amount_crypto} {payment.currency.toUpperCase()}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-gray-400">Address</div>
                  <div className="mt-1 font-mono text-xs break-all">{payment.address || "—"}</div>
                </div>
                {payment.txid && (
                  <div className="sm:col-span-2">
                    <div className="text-xs font-semibold uppercase text-gray-400">Transaction ID</div>
                    <div className="mt-1 font-mono text-xs break-all">{payment.txid}</div>
                  </div>
                )}
              </div>
              {payment.status === "pending" && payment.txid && (
                <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                  Customer submitted a transaction ID. Verify the transaction on the blockchain, then mark the order as paid.
                </div>
              )}
            </div>
          )}

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="mb-4 font-bold">Dropship to supplier</h2>
            <p className="text-sm text-gray-600">
              Forward this order to your supplier to fulfill it. The order details are pre-filled.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={mailto}
                className="rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-700"
              >
                Email supplier (mailto)
              </a>
              <CopyButton text={supplierLines} label="Copy order details" />
            </div>
            {!s.supplier_email && (
              <p className="mt-3 text-xs text-gray-400">
                Tip: set the supplier email in Settings to enable one-click forwarding.
              </p>
            )}
          </div>

          {items.some((i) => String(i.supplier).toUpperCase() === "CJ") && (
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <h2 className="mb-2 font-bold text-orange-800">CJ Dropshipping</h2>
              <p className="mb-4 text-sm text-orange-700">
                This order contains CJ products. Send it to CJ automatically — CJ will fulfill and ship it to your customer.
              </p>
              <CjShipButton orderId={order.id} />
              {order.supplier_order_id && (
                <p className="mt-3 rounded-lg bg-white px-3 py-2 text-xs font-mono text-gray-600">
                  CJ order id: {order.supplier_order_id}
                </p>
              )}
              {order.supplier_cost != null && (
                <div className="mt-3 space-y-1 rounded-lg bg-white px-3 py-2 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Customer paid</span>
                    <span className="font-semibold text-gray-900">{formatPrice(order.total)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>CJ cost (product + shipping)</span>
                    <span className="font-semibold text-gray-900">{formatPrice(order.supplier_cost)}</span>
                  </div>
                  {(() => {
                    const profit = orderProfit(order);
                    return (
                      <div className="flex justify-between border-t border-gray-200 pt-1">
                        <span className="font-bold">Net profit</span>
                        <span className={`font-extrabold ${profit != null && profit < 0 ? "text-red-600" : "text-emerald-600"}`}>
                          {profit == null ? "—" : formatPrice(profit)}
                        </span>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="mb-4 font-bold">Customer</h2>
            {customer ? (
              <div className="space-y-1 text-sm text-gray-600">
                <div className="font-semibold text-gray-900">{customer.name}</div>
                <div>{customer.email}</div>
                {customer.phone && <div>{customer.phone}</div>}
                <div className="pt-2">
                  {customer.address}
                  <br />
                  {customer.city}, {customer.country} {customer.zip}
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-400">No customer info</p>
            )}
          </div>

          <OrderActions
            orderId={order.id}
            status={order.status}
            tracking={order.tracking}
            needsVerification={!!payment && payment.status === "pending" && !!payment.txid}
          />
        </div>
      </div>
    </div>
  );
}
