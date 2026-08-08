"use client";

import { useRouter } from "next/navigation";

export default function DeleteProductButton({ id }: { id: number }) {
  const router = useRouter();

  async function del() {
    if (!confirm("Delete this product?")) return;
    const res = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    if (res.ok) router.refresh();
  }

  return (
    <button
      type="button"
      onClick={del}
      className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
    >
      Delete
    </button>
  );
}
