import Link from "next/link";
import { listOrders, getCustomer, getPaymentForOrder } from "@/lib/orders";
import { formatPrice, formatDate } from "@/lib/utils";
import ExportOrdersButton from "../components/ExportOrdersButton";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const orders = await listOrders(100);

  const customers = await Promise.all(
    [...new Set(orders.map((o) => o.customer_id))].map((id) => getCustomer(id))
  );
  const customerById = new Map(
    customers.filter((c) => !!c).map((c) => [c!.id, c!])
  );
  const payments = await Promise.all(orders.map((o) => getPaymentForOrder(o.id)));
  const paymentByOrder = new Map(
    payments.filter((p) => !!p).map((p) => [p!.order_id, p!])
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="mt-1 text-sm text-gray-500">{orders.length} orders</p>
        </div>
        <ExportOrdersButton orders={orders} />
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Items</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Payment</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((o) => {
              const customer = customerById.get(o.customer_id);
              const payment = paymentByOrder.get(o.id);
              const items = JSON.parse(o.items) as Array<{ qty: number }>;
              const itemCount = items.reduce((s, i) => s + i.qty, 0);
              return (
                <tr key={o.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Link href={`/admin/orders/${o.id}`} className="font-mono font-semibold hover:underline">
                      {o.id}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{customer?.name ?? "-"}</div>
                    <div className="text-xs text-gray-400">{customer?.email}</div>
                  </td>
                  <td className="px-4 py-3">{itemCount}</td>
                  <td className="px-4 py-3 font-semibold">{formatPrice(o.total)}</td>
                  <td className="px-4 py-3">
                    {payment ? (
                      <span className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase ${
                        payment.status === "paid" ? "bg-emerald-100 text-emerald-700"
                        : payment.status === "pending" ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                      }`}>
                        {payment.status} · {payment.currency.toUpperCase()}
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase ${
                      o.status === "delivered" ? "bg-emerald-100 text-emerald-700"
                      : o.status === "cancelled" ? "bg-red-100 text-red-700"
                      : o.status === "pending" ? "bg-amber-100 text-amber-700"
                      : "bg-gray-100 text-gray-700"
                    }`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{formatDate(o.created_at)}</td>
                </tr>
              );
            })}
            {orders.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-gray-400">
                  No orders yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
