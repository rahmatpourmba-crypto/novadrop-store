"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchProduct {
  id: string;
  nameEn: string;
  bigImage: string;
  sellPrice: string;
  nowPrice: string;
  warehouseInventoryNum: number;
}

interface Variant {
  vid: string;
  variantSku: string;
  variantNameEn: string;
  variantImage: string;
  variantSellPrice: string;
  variantStock: number;
}

interface Detail {
  pid: string;
  productNameEn: string;
  productImage: string;
  variants: Variant[];
}

export default function CjClient({
  categories,
}: {
  categories: Array<{ id: number; name: string }>;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<SearchProduct[] | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [markup, setMarkup] = useState("2.5");
  const [categoryId, setCategoryId] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function search(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setDetail(null);
    setMsg(null);
    try {
      const res = await fetch(`/api/admin/cj/import?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Search failed.");
      setProducts(data.products);
      if (!data.products?.length) setMsg({ ok: false, text: "No products found." });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed.");
    }
    setBusy(false);
  }

  async function openProduct(pid: string) {
    setBusy(true);
    setError("");
    setSelected([]);
    setMsg(null);
    try {
      const res = await fetch(`/api/admin/cj/import?pid=${encodeURIComponent(pid)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not load variants.");
      setDetail(data.detail);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load variants.");
    }
    setBusy(false);
  }

  function toggle(vid: string) {
    setSelected((s) => (s.includes(vid) ? s.filter((x) => x !== vid) : [...s, vid]));
  }

  async function importSelected() {
    if (!detail) return;
    if (selected.length === 0) {
      setMsg({ ok: false, text: "Select at least one variant." });
      return;
    }
    setBusy(true);
    setError("");
    setMsg(null);
    try {
      const res = await fetch("/api/admin/cj/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pid: detail.pid,
          variantVids: selected,
          markup: Number(markup) || 2.5,
          category_id: categoryId ? Number(categoryId) : null,
          featured: false,
          is_active: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Import failed.");
      setMsg({ ok: true, text: `Imported ${data.imported} product(s).` });
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed.");
    }
    setBusy(false);
  }

  const inputCls =
    "w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm outline-none focus:border-gray-900";

  return (
    <div>
      <h1 className="text-2xl font-bold">Import from CJ Dropshipping</h1>
      <p className="mt-1 text-sm text-gray-500">
        Search CJ&apos;s catalog, pick variants, and import them into your store with your own markup.
      </p>

      <form onSubmit={search} className="mt-6 flex max-w-xl gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className={inputCls}
          placeholder="Search CJ products (e.g. hoodie, ring, cable)…"
        />
        <button
          type="submit"
          disabled={busy}
          className="shrink-0 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 disabled:opacity-50"
        >
          {busy ? "Searching…" : "Search"}
        </button>
      </form>

      {error && (
        <div className="mt-4 max-w-xl rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
      {msg && (
        <div
          className={`mt-4 max-w-xl rounded-lg px-4 py-3 text-sm ${
            msg.ok ? "border border-emerald-200 bg-emerald-50 text-emerald-700" : "border border-amber-200 bg-amber-50 text-amber-700"
          }`}
        >
          {msg.text}
        </div>
      )}

      {detail ? (
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={detail.productImage} alt="" className="h-20 w-20 rounded-xl bg-gray-100 object-cover" />
                <div>
                  <div className="font-bold">{detail.productNameEn}</div>
                  <div className="text-xs text-gray-400 font-mono">{detail.pid}</div>
                  <button
                    onClick={() => setDetail(null)}
                    className="mt-2 text-sm font-semibold text-gray-500 hover:underline"
                  >
                    ← Back to results
                  </button>
                </div>
              </div>
              <h2 className="mt-6 mb-3 font-bold">Variants ({detail.variants?.length ?? 0})</h2>
              <ul className="divide-y divide-gray-100">
                {detail.variants?.map((v) => (
                  <li key={v.vid} className="flex items-center gap-3 py-2.5">
                    <input
                      type="checkbox"
                      checked={selected.includes(v.vid)}
                      onChange={() => toggle(v.vid)}
                      className="h-4 w-4"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.variantImage || detail.productImage} alt="" className="h-11 w-11 rounded-lg bg-gray-100 object-cover" />
                    <div className="flex-1 text-sm">
                      <div className="font-medium">{v.variantNameEn || v.variantSku}</div>
                      <div className="text-xs text-gray-400 font-mono">{v.variantSku} · stock {v.variantStock ?? 0}</div>
                    </div>
                    <div className="text-sm font-semibold">${v.variantSellPrice}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="mb-4 font-bold">Import options</h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Price markup (× CJ cost)</label>
                  <input
                    value={markup}
                    onChange={(e) => setMarkup(e.target.value)}
                    type="number"
                    step="0.1"
                    min="1"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Category</label>
                  <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className={inputCls}>
                    <option value="">— None —</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={importSelected}
                  disabled={busy}
                  className="w-full rounded-lg bg-orange-600 px-4 py-3 text-sm font-bold text-white hover:bg-orange-500 disabled:opacity-50"
                >
                  {busy ? "Importing…" : `Import ${selected.length} variant(s)`}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        products && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => openProduct(p.id)}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition hover:border-gray-400"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.bigImage} alt="" className="h-44 w-full object-cover bg-gray-100" />
                <div className="p-4">
                  <div className="line-clamp-2 text-sm font-semibold">{p.nameEn}</div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="font-bold text-gray-900">${p.sellPrice}</span>
                    <span className="text-xs text-gray-400">stock {p.warehouseInventoryNum ?? 0}</span>
                  </div>
                  <div className="mt-1 text-xs text-orange-600 font-semibold">Select variants →</div>
                </div>
              </button>
            ))}
          </div>
        )
      )}
    </div>
  );
}
