"use client";

import { useState } from "react";

export default function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50"
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
