import Link from "next/link";
import { db } from "@/lib/db";
import { recentOrders, orderTotals, getCustomer } from "@/lib/orders";
import { formatPrice, formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const totals = orderTotals();
  const orders = recentOrders(8);
  const pendingPayments = db
    .prepare(
      `SELECT p.*, o.total, o.status AS order_status
       FROM payments p JOIN orders o ON o.id = p.order_id
       WHERE p.status = 'pending' AND p.txid != ''
       ORDER BY p.updated_at DESC LIMIT 10`
    )
    .all() as Array<{
    id: string;
    order_id: string;
    currency: string;
    txid: string;
    amount_crypto: number;
    status: string;
    total: number;
    order_status: string;
  }>;

  const lowStock = db
    .prepare("SELECT id, title, stock FROM products WHERE stock <= 10 ORDER BY stock ASC LIMIT 8")
    .all() as Array<{ id: number; title: string; stock: number }>;

  const cards = [
    { label: "Total orders", value: String(totals.order_count), color: "bg-gray-900" },
    { label: "Confirmed revenue", value: formatPrice(totals.revenue), color: "bg-emerald-600" },
    { label: "Awaiting payment", value: formatPrice(totals.pending_revenue), color: "bg-amber-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-1 text-sm text-gray-500">Overview of your store</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <div key={c.label} className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className={`inline-flex rounded-lg ${c.color} px-2.5 py-1 text-xs font-bold text-white`}>
              {c.label}
            </div>
            <div className="mt-3 text-2xl font-extrabold">{c.value}</div>
          </div>
        ))}
      </div>

      {pendingPayments.length > 0 && (
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="font-bold text-amber-900">Payments awaiting verification</h2>
          <p className="mt-1 text-sm text-amber-800">
            Customers submitted transaction IDs. Verify them and mark orders as paid.
          </p>
          <ul className="mt-3 space-y-2">
            {pendingPayments.map((p) => (
              <li key={p.id} className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5 text-sm">
                <div>
                  <span className="font-mono font-semibold">{p.order_id}</span>
                  <span className="ml-3 text-gray-500">
                    {p.amount_crypto} {p.currency.toUpperCase()} · {formatPrice(p.total)}
                  </span>
                </div>
                <Link href={`/admin/orders/${p.order_id}`} className="font-semibold text-amber-700 hover:underline">
                  Review →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-bold">Recent orders</h2>
            <Link href="/admin/orders" className="text-sm font-semibold text-gray-900 hover:underline">
              View all →
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">Order</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((o) => {
                  const customer = getCustomer(o.customer_id);
                  return (
                    <tr key={o.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <Link href={`/admin/orders/${o.id}`} className="font-mono font-semibold hover:underline">
                          {o.id}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{customer?.name ?? "-"}</td>
                      <td className="px-4 py-3 font-semibold">{formatPrice(o.total)}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase ${
                          o.status === "delivered" ? "bg-emerald-100 text-emerald-700"
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
                    <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                      No orders yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-bold">Low stock</h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            {lowStock.length === 0 && <p className="text-sm text-gray-400">All products well stocked.</p>}
            <ul className="space-y-2">
              {lowStock.map((p) => (
                <li key={p.id} className="flex items-center justify-between text-sm">
                  <span className="truncate text-gray-600">{p.title}</span>
                  <span className={`ml-2 font-semibold ${p.stock <= 0 ? "text-red-600" : "text-amber-600"}`}>
                    {p.stock}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
