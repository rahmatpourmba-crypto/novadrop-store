"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CjShipButton({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null);

  async function ship() {
    setBusy(true);
    setResult(null);
    try {
      const res = await fetch(`/api/admin/cj/ship/${orderId}`, { method: "POST" });
      const data = await res.json();
      if (res.ok && data.ok) {
        setResult({ ok: true, text: `Order sent to CJ. CJ order id: ${data.orderId} (${data.logisticName})` });
        router.refresh();
      } else {
        setResult({ ok: false, text: data.error || "Could not ship to CJ." });
      }
    } catch {
      setResult({ ok: false, text: "Network error." });
    }
    setBusy(false);
  }

  return (
    <div>
      <button
        onClick={ship}
        disabled={busy}
        className="rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-500 disabled:opacity-50"
      >
        {busy ? "Shipping to CJ…" : "Auto-fulfill via CJ"}
      </button>
      {result && (
        <p className={`mt-3 rounded-lg px-3 py-2 text-xs ${result.ok ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {result.text}
        </p>
      )}
    </div>
  );
}
