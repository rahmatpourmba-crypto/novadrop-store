import Link from "next/link";
import { listProducts, listCategories, getCategoryBySlug } from "@/lib/products";
import { getLang, getT } from "@/lib/i18n/server";
import ProductCard from "../components/ProductCard";

export const dynamic = "force-dynamic";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const params = await searchParams;
  const category = params.category || "";
  const q = params.q || "";

  const [products, categories, activeCat, lang, t] = await Promise.all([
    listProducts({ category, q }),
    listCategories(),
    category ? getCategoryBySlug(category) : Promise.resolve(undefined),
    getLang(),
    getT(),
  ]);
  void lang;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">
        {activeCat ? activeCat.name : t("store.shop.allProducts")}
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        {q
          ? t("store.shop.resultsFor", { count: products.length, q })
          : t("store.shop.results", { count: products.length })}
      </p>

      <form method="GET" action="/shop" className="mt-6 flex max-w-md gap-2">
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder={t("store.shop.searchPlaceholder")}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-900"
        />
        <button
          type="submit"
          className="rounded-lg bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-700"
        >
          {t("store.shop.searchBtn")}
        </button>
      </form>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/shop"
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
            !category ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 text-gray-600 hover:border-gray-900"
          }`}
        >
          {t("store.shop.allFilter")}
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/shop?category=${c.slug}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              category === c.slug ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 text-gray-600 hover:border-gray-900"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-gray-300 p-16 text-center text-gray-500">
          {t("store.shop.noProducts")}
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
