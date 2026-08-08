import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/session";
import { getT } from "@/lib/i18n/server";
import LogoutButton from "./components/LogoutButton";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const admin = await isAdmin();
  if (!admin) redirect("/admin/login");

  const t = await getT();

  const NAV = [
    { href: "/admin", label: t("admin.nav.dashboard"), icon: "◈" },
    { href: "/admin/orders", label: t("admin.nav.orders"), icon: "☰" },
    { href: "/admin/products", label: t("admin.nav.products"), icon: "□" },
    { href: "/admin/cj", label: t("admin.nav.importFromCj"), icon: "⇅" },
    { href: "/admin/import", label: t("admin.nav.importCsv"), icon: "⤓" },
    { href: "/admin/customers", label: t("admin.nav.customers"), icon: "●" },
    { href: "/admin/settings", label: t("admin.nav.settings"), icon: "⚙" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="fixed inset-y-0 left-0 z-30 flex w-60 flex-col bg-gray-900 text-gray-300">
        <div className="flex h-16 items-center gap-2 border-b border-gray-800 px-5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-gray-900">N</span>
          <span className="font-bold text-white">NovaDrop Admin</span>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition hover:bg-gray-800 hover:text-white"
            >
              <span className="w-4 text-center">{item.icon}</span>
              {item.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition hover:bg-gray-800 hover:text-white"
            >
              <span className="w-4 text-center">↗</span>
              {t("admin.nav.viewStore")}
            </Link>
          </div>
        </nav>
        <div className="border-t border-gray-800 p-3">
          <LogoutButton />
        </div>
      </aside>
      <div className="ml-60 flex-1">
        <div className="flex justify-end border-b border-gray-200 bg-white px-8 py-3">
          <LanguageSwitcher />
        </div>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
