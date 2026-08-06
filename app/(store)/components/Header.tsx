"use client";

import Link from "next/link";
import { useCart } from "../cart-context";
import { useT } from "@/lib/i18n/client";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function Header({ storeName }: { storeName: string }) {
  const { count } = useCart();
  const t = useT();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gray-900 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h10" />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight">{storeName}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
          <Link href="/" className="hover:text-gray-900">{t("store.nav.home")}</Link>
          <Link href="/shop" className="hover:text-gray-900">{t("store.nav.shop")}</Link>
          <Link href="/shop?category=electronics" className="hover:text-gray-900">{t("store.nav.electronics")}</Link>
          <Link href="/shop?category=home" className="hover:text-gray-900">{t("store.nav.homeLiving")}</Link>
          <Link href="/order/TRACK" className="hidden" aria-hidden>{t("store.nav.trackOrder")}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/cart"
            className="relative inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium hover:bg-gray-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6h15l-1.5 9h-12L6 6Zm0 0L5 3H2" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="17" cy="20" r="1.5" />
            </svg>
            {t("common.cart")}
            {count > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-gray-900 px-1 text-xs font-semibold text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
