import { CartProvider } from "./cart-context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getSettings } from "@/lib/settings";
import { getT } from "@/lib/i18n/server";

export const dynamic = "force-dynamic";

export default async function StoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSettings();
  const storeName = settings.store_name || "NovaDrop";
  const t = await getT();

  return (
    <CartProvider>
      <Header storeName={storeName} />
      <main className="flex-1">{children}</main>
      <Footer storeName={storeName} tagline={settings.store_tagline || ""} t={t} />
    </CartProvider>
  );
}
