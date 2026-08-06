"use client";

import { useRouter } from "next/navigation";
import { languages } from "@/lib/i18n/core";
import { useI18n } from "@/lib/i18n/client";

export default function LanguageSwitcher() {
  const { lang } = useI18n();
  const router = useRouter();

  async function changeLang(code: string) {
    await fetch("/api/i18n/lang", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lang: code }),
    });
    router.refresh();
  }

  return (
    <select
      value={lang}
      onChange={(e) => changeLang(e.target.value)}
      className="cursor-pointer rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      aria-label="Language"
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.name}
        </option>
      ))}
    </select>
  );
}
