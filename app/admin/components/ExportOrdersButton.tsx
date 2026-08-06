"use client";

interface OrderRow {
  id: string;
  customer_id: number;
  items: string;
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
  currency: string;
  tracking: string;
  created_at: string;
  customer?: { name: string; email: string; country: string; city: string };
}

export default function ExportOrdersButton({ orders }: { orders: OrderRow[] }) {
  function exportCsv() {
    const header = [
      "Order ID", "Date", "Customer", "Email", "Country", "City",
      "Items", "Subtotal", "Shipping", "Total", "Status", "Tracking",
    ];
    const rows = orders.map((o) => {
      const items = JSON.parse(o.items) as Array<{ qty: number; supplier_sku: string; title: string }>;
      const itemsDesc = items
        .map((i) => `${i.qty}x ${i.supplier_sku || i.title}`)
        .join(" | ");
      return [
        o.id,
        o.created_at,
        o.customer?.name ?? "",
        o.customer?.email ?? "",
        o.customer?.country ?? "",
        o.customer?.city ?? "",
        itemsDesc,
        o.subtotal,
        o.shipping,
        o.total,
        o.status,
        o.tracking,
      ];
    });

    const csv = [header, ...rows]
      .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
      .join("\r\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `orders-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={exportCsv}
      className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold hover:bg-gray-50"
    >
      Export CSV
    </button>
  );
}
