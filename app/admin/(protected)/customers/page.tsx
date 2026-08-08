import { db } from "@/lib/db";
import { listCustomers } from "@/lib/orders";
import { formatPrice, formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminCustomersPage() {
  const customers = await listCustomers();
  const rows = await Promise.all(
    customers.map(async (c) => {
      const stats = await db.get<{ order_count: number; total_spent: number }>(
        `SELECT COUNT(*) AS order_count,
                COALESCE(SUM(CASE WHEN status != 'cancelled' THEN total ELSE 0 END), 0) AS total_spent
         FROM orders WHERE customer_id = ?`,
        [c.id]
      );
      return { ...c, ...(stats ?? { order_count: 0, total_spent: 0 }) };
    })
  );

  return (
    <div>
      <h1 className="text-2xl font-bold">Customers</h1>
      <p className="mt-1 text-sm text-gray-500">{customers.length} customers</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Orders</th>
              <th className="px-4 py-3">Total spent</th>
              <th className="px-4 py-3">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-xs text-gray-400">{c.email}</div>
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {c.city ? `${c.city}, ` : ""}{c.country}
                </td>
                <td className="px-4 py-3">{c.order_count}</td>
                <td className="px-4 py-3 font-semibold">{formatPrice(c.total_spent)}</td>
                <td className="px-4 py-3 text-gray-500">{formatDate(c.created_at)}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-gray-400">
                  No customers yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
