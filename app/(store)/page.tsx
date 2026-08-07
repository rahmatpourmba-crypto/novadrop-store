import Link from "next/link";
import { listFeatured, listCategories } from "@/lib/products";
import { getSettings } from "@/lib/settings";
import { getT } from "@/lib/i18n/server";
import ProductCard from "./components/ProductCard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [featured, categories, s, t] = await Promise.all([
    listFeatured(),
    listCategories(),
    getSettings(),
    getT(),
  ]);

  return (
    <div>
      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {t("store.hero.badge")}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {s.store_name || "NovaDrop"}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {s.store_tagline || t("store.hero.heroFallback")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                {t("store.hero.shopNow")}
              </Link>
              <Link
                href="#how"
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                {t("store.hero.howItWorks")}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <span>✔ {t("store.hero.fastShipping")}</span>
              <span>✔ {t("store.hero.returns7")}</span>
              <span>✔ {t("store.hero.payMethods")}</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold">{t("store.hero.payWithCrypto")}</span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                  {t("store.hero.secure")}
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { sym: "₿", name: t("store.hero.bitcoin"), note: "BTC" },
                  { sym: "Ξ", name: t("store.hero.ethereum"), note: "ETH" },
                  { sym: "₮", name: t("store.hero.tether"), note: "USDT (TRC-20)" },
                  { sym: "Ł", name: t("store.hero.litecoin"), note: "LTC" },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gray-900 text-white">
                        {c.sym}
                      </span>
                      <div>
                        <div className="text-sm font-semibold">{c.name}</div>
                        <div className="text-xs text-gray-400">{c.note}</div>
                      </div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-gray-400">
                {t("store.hero.instantConfirm")} · {t("store.hero.noAccount")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">{t("store.featured.title")}</h2>
            <p className="mt-1 text-sm text-gray-500">{t("store.featured.subtitle")}</p>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-gray-900 hover:underline">
            {t("store.footer.allProducts")} →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="mb-8 text-2xl font-bold">{t("store.categories.title")}</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/shop?category=${c.slug}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-900"
              >
                <div className="text-3xl font-extrabold text-gray-300">0{c.id}</div>
                <div className="mt-4 font-semibold">{c.name}</div>
                <div className="mt-1 text-xs text-gray-500 line-clamp-2">{c.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="mb-8 text-center text-2xl font-bold">{t("store.how.title")}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "1", tt: t("store.how.step1t"), dd: t("store.how.step1d") },
            { n: "2", tt: t("store.how.step2t"), dd: t("store.how.step2d") },
            { n: "3", tt: t("store.how.step3t"), dd: t("store.how.step3d") },
          ].map((step) => (
            <div key={step.n} className="rounded-2xl border border-gray-200 p-6">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-900 font-bold text-white">
                {step.n}
              </div>
              <div className="mt-4 font-semibold">{step.tt}</div>
              <div className="mt-1 text-sm text-gray-500">{step.dd}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
