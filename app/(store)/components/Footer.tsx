import Link from "next/link";
import type { T } from "@/lib/i18n/core";

export default function Footer({
  storeName,
  tagline,
  t,
}: {
  storeName: string;
  tagline: string;
  t: T;
}) {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-lg font-bold">{storeName}</div>
          <p className="mt-2 text-sm text-gray-600">{tagline}</p>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">{t("store.footer.shopCol")}</div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/shop" className="hover:text-gray-900">{t("store.footer.allProducts")}</Link></li>
            <li><Link href="/shop?category=electronics" className="hover:text-gray-900">{t("store.nav.electronics")}</Link></li>
            <li><Link href="/shop?category=fashion" className="hover:text-gray-900">{t("store.footer.fashion")}</Link></li>
            <li><Link href="/shop?category=home" className="hover:text-gray-900">{t("store.nav.homeLiving")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">{t("store.footer.supportCol")}</div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/order" className="hover:text-gray-900">{t("store.footer.trackYourOrder")}</Link></li>
            <li>{t("store.footer.shippingWorldwide")}</li>
            <li>{t("store.footer.returns7d")}</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">{t("store.footer.paymentsCol")}</div>
          <p className="text-sm text-gray-600">
            {t("store.footer.weAccept")}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {storeName}. {t("store.footer.rights")}
      </div>
    </footer>
  );
}
