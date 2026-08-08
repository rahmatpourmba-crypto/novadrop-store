"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface ProductFormData {
  id?: number;
  slug: string;
  title: string;
  description: string;
  price: string;
  compare_at: string;
  category_id: string;
  images: string[];
  stock: string;
  supplier: string;
  supplier_sku: string;
  is_active: boolean;
  featured: boolean;
  translations?: Record<string, { title?: string; description?: string }>;
}

const TRANSLATION_LANGS: Array<{ code: string; name: string }> = [
  { code: "en", name: "English" },
  { code: "fa", name: "فارسی" },
  { code: "ar", name: "العربية" },
  { code: "ckb", name: "کوردی سۆرانی" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ru", name: "Русский" },
  { code: "tr", name: "Türkçe" },
  { code: "zh", name: "中文" },
];

const EMPTY: ProductFormData = {
  slug: "",
  title: "",
  description: "",
  price: "",
  compare_at: "",
  category_id: "",
  images: [],
  stock: "100",
  supplier: "",
  supplier_sku: "",
  is_active: true,
  featured: false,
  translations: {},
};

export default function ProductForm({
  initial,
  categories,
}: {
  initial?: ProductFormData;
  categories: Array<{ id: number; name: string }>;
}) {
  const router = useRouter();
  const [form, setForm] = useState<ProductFormData>(
    initial
      ? { ...initial, images: initial.images.length ? initial.images : [""] }
      : EMPTY
  );
  const [activeLang, setActiveLang] = useState("fa");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const set = (k: keyof ProductFormData, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  function setTranslation(lang: string, field: "title" | "description", value: string) {
    setForm((f) => ({
      ...f,
      translations: {
        ...f.translations,
        [lang]: { ...f.translations?.[lang], [field]: value },
      },
    }));
  }

  function setImage(i: number, value: string) {
    const images = [...form.images];
    images[i] = value;
    setForm((f) => ({ ...f, images }));
  }

  function addImage() {
    setForm((f) => ({ ...f, images: [...f.images, ""] }));
  }

  function removeImage(i: number) {
    setForm((f) => ({ ...f, images: f.images.filter((_, idx) => idx !== i) }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const payload = {
      ...form,
      images: form.images.filter((s) => s.trim().length > 0),
      price: Number(form.price) || 0,
      compare_at: form.compare_at ? Number(form.compare_at) : null,
      stock: Number(form.stock) || 0,
      category_id: form.category_id ? Number(form.category_id) : null,
    };
    try {
      const url = form.id ? `/api/admin/products/${form.id}` : "/api/admin/products";
      const res = await fetch(url, {
        method: form.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not save product.");
        setBusy(false);
        return;
      }
      router.push("/admin/products");
      router.refresh();
    } catch {
      setError("Network error.");
      setBusy(false);
    }
  }

  const inputCls =
    "w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm outline-none focus:border-gray-900";

  return (
    <form onSubmit={submit} className="mt-6 grid gap-6 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 font-bold">General</h2>
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Title *</label>
              <input
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                className={inputCls}
                placeholder="Product name"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Slug</label>
                <input
                  value={form.slug}
                  onChange={(e) => set("slug", e.target.value)}
                  className={inputCls}
                  placeholder="auto-generated if empty"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Category</label>
                <select
                  value={form.category_id}
                  onChange={(e) => set("category_id", e.target.value)}
                  className={inputCls}
                >
                  <option value="">— None —</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                rows={8}
                className={inputCls}
                placeholder="Product description…"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 font-bold">Images</h2>
          <div className="space-y-3">
            {form.images.map((img, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={img}
                  onChange={(e) => setImage(i, e.target.value)}
                  className={inputCls}
                  placeholder="https://… image URL"
                />
                {form.images.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="shrink-0 rounded-lg border border-red-200 px-3 text-sm text-red-600 hover:bg-red-50"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addImage}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold hover:bg-gray-50"
            >
              + Add image
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 font-bold">Translations</h2>
          <p className="mb-3 text-xs text-gray-500">
            Translated title &amp; description shown to visitors in each language. Empty fields fall back to the English title/description.
          </p>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {TRANSLATION_LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setActiveLang(l.code)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  activeLang === l.code
                    ? "bg-gray-900 text-white"
                    : "border border-gray-300 text-gray-600 hover:border-gray-900"
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Title ({TRANSLATION_LANGS.find((l) => l.code === activeLang)?.name})
              </label>
              <input
                value={form.translations?.[activeLang]?.title ?? ""}
                onChange={(e) => setTranslation(activeLang, "title", e.target.value)}
                className={inputCls}
                placeholder={`${form.title || "English title"}…`}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Description ({TRANSLATION_LANGS.find((l) => l.code === activeLang)?.name})
              </label>
              <textarea
                value={form.translations?.[activeLang]?.description ?? ""}
                onChange={(e) => setTranslation(activeLang, "description", e.target.value)}
                rows={5}
                className={inputCls}
                placeholder="Translated description…"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 font-bold">Pricing & inventory</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Price (USD) *</label>
              <input
                value={form.price}
                onChange={(e) => set("price", e.target.value)}
                type="number"
                step="0.01"
                min="0"
                className={inputCls}
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Compare-at price</label>
              <input
                value={form.compare_at}
                onChange={(e) => set("compare_at", e.target.value)}
                type="number"
                step="0.01"
                min="0"
                className={inputCls}
                placeholder="optional"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Stock</label>
              <input
                value={form.stock}
                onChange={(e) => set("stock", e.target.value)}
                type="number"
                min="0"
                className={inputCls}
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 font-bold">Dropshipping</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Supplier</label>
              <input
                value={form.supplier}
                onChange={(e) => set("supplier", e.target.value)}
                className={inputCls}
                placeholder="e.g. CJ Dropshipping"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Supplier SKU</label>
              <input
                value={form.supplier_sku}
                onChange={(e) => set("supplier_sku", e.target.value)}
                className={inputCls}
                placeholder="Supplier product code"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 font-bold">Visibility</h2>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={form.is_active}
              onChange={(e) => set("is_active", e.target.checked)}
              className="h-4 w-4"
            />
            Active (visible in store)
          </label>
          <label className="mt-3 flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => set("featured", e.target.checked)}
              className="h-4 w-4"
            />
            Featured on homepage
          </label>
        </div>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-bold text-white hover:bg-gray-700 disabled:opacity-50"
        >
          {busy ? "Saving…" : form.id ? "Save changes" : "Create product"}
        </button>
      </div>
    </form>
  );
}
