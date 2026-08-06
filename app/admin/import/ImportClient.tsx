"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TEMPLATE = `title,price,images,stock,description,supplier,supplier_sku,category
Bluetooth Earbuds,24.99,https://example.com/a.jpg|https://example.com/b.jpg,50,Wireless earbuds,AliExpress,AB123,Electronics`;

export default function ImportClient({
  categories,
}: {
  categories: Array<{ id: number; name: string }>;
}) {
  const router = useRouter();
  const [tab, setTab] = useState<"csv" | "link">("csv");
  const [csv, setCsv] = useState("");
  const [hasHeader, setHasHeader] = useState(true);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    ok: boolean;
    text: string;
  } | null>(null);

  const inputCls =
    "w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm outline-none focus:border-gray-900";

  async function importCsv(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/admin/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ csv, hasHeader }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Import failed.");
      const errText = data.errors?.length
        ? ` — ${data.errors.length} row(s) skipped.`
        : "";
      setResult({ ok: true, text: `Imported ${data.imported} product(s).${errText}` });
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed.");
    }
    setBusy(false);
  }

  async function importLink(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/admin/import/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          title: title || undefined,
          price: Number(price),
          category_id: categoryId ? Number(categoryId) : null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Import failed.");
      setResult({ ok: true, text: `Imported "${data.title}" (${data.source}).` });
      router.refresh();
      setUrl("");
      setTitle("");
      setPrice("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed.");
    }
    setBusy(false);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Import products</h1>
      <p className="mt-1 text-sm text-gray-500">
        Bulk-import products from a CSV file, or import a single product from a link.
      </p>

      <div className="mt-6 flex gap-2">
        {(["csv", "link"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              tab === t ? "bg-gray-900 text-white" : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {t === "csv" ? "CSV file" : "Product link"}
          </button>
        ))}
      </div>

      {error && (
        <div className="mt-4 max-w-2xl rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
      {result && (
        <div
          className={`mt-4 max-w-2xl rounded-lg px-4 py-3 text-sm ${
            result.ok ? "border border-emerald-200 bg-emerald-50 text-emerald-700" : "border border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {result.text}
        </div>
      )}

      {tab === "csv" ? (
        <form onSubmit={importCsv} className="mt-6 max-w-2xl space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="mb-3 font-bold">CSV columns</h2>
            <p className="text-sm text-gray-600">
              The first row is treated as a header. Recognized columns:{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">title</code>,{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">price</code>,{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">images</code> (separate with{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">|</code>),{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">stock</code>,{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">description</code>,{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">supplier</code>,{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">supplier_sku</code>,{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">category</code>.
            </p>
            <textarea
              value={csv}
              onChange={(e) => setCsv(e.target.value)}
              rows={10}
              className={inputCls + " mt-4 font-mono text-xs"}
              placeholder={TEMPLATE}
            />
            <label className="mt-3 flex items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                checked={hasHeader}
                onChange={(e) => setHasHeader(e.target.checked)}
                className="h-4 w-4"
              />
              First row is a header
            </label>
            <button
              type="submit"
              disabled={busy}
              className="mt-4 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 disabled:opacity-50"
            >
              {busy ? "Importing…" : "Import CSV"}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={importLink} className="mt-6 max-w-2xl space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="mb-3 font-bold">Product link</h2>
            <div>
              <label className="mb-1 block text-sm font-medium">URL *</label>
              <input value={url} onChange={(e) => setUrl(e.target.value)} className={inputCls} placeholder="https://www.aliexpress.com/item/… or https://www.cjdropshipping.com/…" required />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Title (optional)</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className={inputCls} placeholder="Auto-detected if left empty" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Selling price (USD) *</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" step="0.01" min="0" className={inputCls} placeholder="24.99" required />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium">Category</label>
              <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className={inputCls}>
                <option value="">— None —</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={busy}
              className="mt-4 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 disabled:opacity-50"
            >
              {busy ? "Importing…" : "Import product"}
            </button>
            <p className="mt-3 text-xs text-gray-400">
              Title and image are auto-detected from the page when possible. Some sites block automated requests; you can still enter the title manually.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
