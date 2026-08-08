"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsForm({ settings }: { settings: Record<string, string> }) {
  const router = useRouter();
  const [form, setForm] = useState<Record<string, string>>(settings);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputCls =
    "w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm outline-none focus:border-gray-900";

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMsg({ type: "ok", text: "Settings saved." });
        router.refresh();
      } else {
        setMsg({ type: "err", text: "Could not save settings." });
      }
    } catch {
      setMsg({ type: "err", text: "Network error." });
    }
    setBusy(false);
  }

  const group = (title: string, children: React.ReactNode) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 font-bold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );

  const field = (label: string, key: string, placeholder = "") => (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <input value={form[key] ?? ""} onChange={set(key)} className={inputCls} placeholder={placeholder} />
    </div>
  );

  const selected = form.auto_approve_manual === "1";

  return (
    <form onSubmit={save} className="mt-6 grid gap-6 lg:grid-cols-2">
      {group(
        "Store",
        <>
          {field("Store name", "store_name", "NovaDrop")}
          {field("Tagline", "store_tagline", "Global dropshipping store")}
          {field("Store email", "store_email", "support@store.com")}
          {field("Support email", "support_email", "support@store.com")}
          {field("Supplier email", "supplier_email", "Fulfillment email to forward orders to")}
        </>
      )}

      {group(
        "Shipping",
        <>
          {field("Flat shipping fee (USD)", "shipping_fee", "9.99")}
          {field("Free shipping threshold (USD)", "free_shipping_threshold", "50")}
        </>
      )}

      {group(
        "Crypto payment — wallets (manual mode)",
        <>
          <p className="text-xs text-gray-500">
            These addresses are used when NowPayments is not configured. Customers pay directly to your wallet and submit a transaction ID.
          </p>
          {field("Bitcoin (BTC) address", "address_btc", "bc1q…")}
          {field("Ethereum (ETH) address", "address_eth", "0x…")}
          {field("USDT (TRC-20) address", "address_usdt_trc20", "T…")}
          {field("Litecoin (LTC) address", "address_ltc", "ltc1q…")}
          <div>
            <label className="mb-1 block text-sm font-medium">Manual exchange rate overrides (USD per coin)</label>
            <div className="grid grid-cols-2 gap-3">
              <input value={form.exchange_btc ?? ""} onChange={set("exchange_btc")} className={inputCls} placeholder="BTC rate" />
              <input value={form.exchange_eth ?? ""} onChange={set("exchange_eth")} className={inputCls} placeholder="ETH rate" />
              <input value={form.exchange_usdt ?? ""} onChange={set("exchange_usdt")} className={inputCls} placeholder="USDT rate" />
              <input value={form.exchange_ltc ?? ""} onChange={set("exchange_ltc")} className={inputCls} placeholder="LTC rate" />
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={selected}
              onChange={(e) => setForm((f) => ({ ...f, auto_approve_manual: e.target.checked ? "1" : "0" }))}
              className="h-4 w-4"
            />
            Auto-approve manual payments (skip manual verification)
          </label>
        </>
      )}

      {group(
        "NowPayments (automatic crypto gateway)",
        <>
          <p className="text-xs text-gray-500">
            Add a NowPayments API key to automatically generate per-order deposit addresses and confirm payments without manual review. Create one at nowpayments.io.
          </p>
          {field("NowPayments API key", "nowpayments_api_key", "xxxx-xxxx-xxxx-xxxx")}
          {field("IPN secret (optional, for webhooks)", "nowpayments_ipn_secret")}
          <div>
            <div className="text-xs font-semibold uppercase text-gray-400">Webhook URL</div>
            <code className="mt-1 block rounded-lg bg-gray-50 px-3 py-2 text-xs">
              {typeof window !== "undefined" ? window.location.origin : ""}/api/webhooks/nowpayments
            </code>
          </div>
        </>
      )}

      {group(
        "CJ Dropshipping",
        <>
          <p className="text-xs text-gray-500">
            Connect your CJ Dropshipping account to import products and auto-fulfill orders. Get an API key from the CJ API app at cjdropshipping.com.
          </p>
          {field("CJ API key", "cj_api_key", "CJ...@api...")}
          {field("Ship-from country code", "cj_from_country", "CN")}
          {field("Preferred logistics name (optional)", "cj_logistic_name", "Leave empty to pick the cheapest")}
          <div>
            <label className="mb-1 block text-sm font-medium">Order payment type at CJ</label>
            <select value={form.cj_pay_type ?? "3"} onChange={set("cj_pay_type")} className={inputCls}>
              <option value="3">Create order only (pay later in CJ) — recommended</option>
              <option value="2">Pay from CJ balance automatically</option>
              <option value="1">Page payment (returns a CJ payment URL)</option>
            </select>
          </div>
        </>
      )}

      {msg && (
        <div
          className={`lg:col-span-2 rounded-lg px-4 py-3 text-sm ${
            msg.type === "ok"
              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {msg.text}
        </div>
      )}

      <div className="lg:col-span-2">
        <button
          type="submit"
          disabled={busy}
          className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700 disabled:opacity-50"
        >
          {busy ? "Saving…" : "Save settings"}
        </button>
      </div>
    </form>
  );
}
