"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackOrderPage() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const id = value.trim();
    if (!id) return;
    router.push(`/order/${encodeURIComponent(id)}`);
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <div className="text-5xl">📦</div>
      <h1 className="mt-4 text-2xl font-bold">Track your order</h1>
      <p className="mt-2 text-sm text-gray-500">
        Enter your order number (e.g. ND-20260805-1A2B3C) to see its status.
      </p>
      <form onSubmit={submit} className="mt-6 flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Order number"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-gray-900"
        />
        <button
          type="submit"
          className="shrink-0 rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-gray-700"
        >
          Track
        </button>
      </form>
    </div>
  );
}
