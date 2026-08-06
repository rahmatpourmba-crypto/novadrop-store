"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "../cart-context";
import { formatPrice } from "@/lib/utils";
import { COUNTRIES } from "@/lib/countries";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  countryCode: "",
  zip: "",
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clear } = useCart();
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const set = (k: keyof typeof EMPTY) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Nothing to check out</h1>
        <Link href="/shop" className="mt-4 inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white">
          Browse products
        </Link>
      </div>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.address || !form.countryCode || !form.city) {
      setError("Please fill in all required fields.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          country: COUNTRIES.find((c) => c.code === form.countryCode)?.name || form.countryCode,
          items: items.map((i) => ({ product_id: i.product_id, qty: i.qty })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setBusy(false);
        return;
      }
      clear();
      router.push(`/payment/${data.orderId}`);
    } catch {
      setError("Network error. Please try again.");
      setBusy(false);
    }
  }

  const inputCls =
    "w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm outline-none focus:border-gray-900";

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <p className="mt-1 text-sm text-gray-500">
        You will pay with cryptocurrency after this step.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <form onSubmit={submit} className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-4 font-bold">Shipping information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Full name *</label>
                <input value={form.name} onChange={set("name")} className={inputCls} placeholder="John Smith" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email *</label>
                <input type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@email.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Phone</label>
                <input value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+1 555 000 0000" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Country *</label>
                <select value={form.countryCode} onChange={set("countryCode")} className={inputCls}>
                  <option value="">Select country…</option>
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">City *</label>
                <input value={form.city} onChange={set("city")} className={inputCls} placeholder="New York" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">ZIP / Postal code</label>
                <input value={form.zip} onChange={set("zip")} className={inputCls} placeholder="10001" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium">Street address *</label>
                <input value={form.address} onChange={set("address")} className={inputCls} placeholder="123 Main St, Apt 4" />
              </div>
            </div>
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-gray-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gray-700 disabled:opacity-50"
          >
            {busy ? "Creating order…" : "Continue to crypto payment"}
          </button>
        </form>

        <div className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 font-bold">Order summary</h2>
          <div className="space-y-3">
            {items.map((i) => (
              <div key={i.product_id} className="flex items-center gap-3 text-sm">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                  {i.qty}
                </span>
                <span className="flex-1 truncate text-gray-600">{i.title}</span>
                <span className="font-medium">{formatPrice(i.price * i.qty)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-gray-500">Shipping</span>
              <span>Calculated after order</span>
            </div>
            <div className="mt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
