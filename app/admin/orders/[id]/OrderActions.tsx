"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const STATUSES = [
  { value: "pending", label: "Pending payment" },
  { value: "paid", label: "Paid" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

export default function OrderActions({
  orderId,
  status,
  tracking,
  needsVerification,
}: {
  orderId: string;
  status: string;
  tracking: string;
  needsVerification: boolean;
}) {
  const router = useRouter();
  const [statusVal, setStatusVal] = useState(status);
  const [trackingVal, setTrackingVal] = useState(tracking);
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  async function save() {
    setBusy(true);
    setMsg("");
    const res = await fetch(`/api/admin/orders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: statusVal, tracking: trackingVal }),
    });
    if (res.ok) {
      setMsg("Saved.");
      router.refresh();
    } else {
      setMsg("Could not save.");
    }
    setBusy(false);
  }

  async function verify() {
    setBusy(true);
    setMsg("");
    const txid = prompt("Enter the transaction hash to confirm payment:");
    if (!txid) {
      setBusy(false);
      return;
    }
    const res = await fetch(`/api/admin/orders/${orderId}/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ txid }),
    });
    const data = await res.json();
    setMsg(res.ok ? "Payment verified — order marked as paid." : data.error || "Could not verify.");
    if (res.ok) {
      setStatusVal("paid");
      router.refresh();
    }
    setBusy(false);
  }

  const inputCls =
    "w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm outline-none focus:border-gray-900";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 font-bold">Manage order</h2>
      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Status</label>
          <select value={statusVal} onChange={(e) => setStatusVal(e.target.value)} className={inputCls}>
            {STATUSES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Tracking number</label>
          <input
            value={trackingVal}
            onChange={(e) => setTrackingVal(e.target.value)}
            className={inputCls}
            placeholder="e.g. USPS 9400…"
          />
        </div>

        {needsVerification && (
          <button
            type="button"
            disabled={busy}
            onClick={verify}
            className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-500 disabled:opacity-50"
          >
            Verify & mark as paid
          </button>
        )}

        <button
          type="button"
          disabled={busy}
          onClick={save}
          className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-gray-700 disabled:opacity-50"
        >
          Save changes
        </button>

        {msg && <p className="text-sm text-gray-600">{msg}</p>}
      </div>
    </div>
  );
}
