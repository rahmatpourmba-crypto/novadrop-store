import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, imagesOf, translateProduct } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { getLang, getT } from "@/lib/i18n/server";
import ProductBuyBox from "../../components/ProductBuyBox";
import ProductCard from "../../components/ProductCard";
import { listProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [product, lang] = await Promise.all([getProductBySlug(slug), getLang()]);
  if (!product) return { title: "Product not found" };
  const local = translateProduct(product, lang);
  return {
    title: `${local.title} — NovaDrop`,
    description: local.description.slice(0, 160),
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [product, lang, t] = await Promise.all([
    getProductBySlug(slug),
    getLang(),
    getT(),
  ]);
  if (!product) notFound();
  const local = translateProduct(product, lang);

  const images = imagesOf(product);
  const mainImg = images[0] || `https://picsum.photos/seed/${product.slug}/900/900`;
  const related = (await listProducts({ category: product.category_slug }))
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const discount =
    product.compare_at && product.compare_at > product.price
      ? Math.round((1 - product.price / product.compare_at) * 100)
      : null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-900">{t("store.nav.home")}</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-gray-900">{t("store.nav.shop")}</Link>
        {product.category_name && (
          <>
            <span className="mx-2">/</span>
            <Link href={`/shop?category=${product.category_slug}`} className="hover:text-gray-900">
              {product.category_name}
            </Link>
          </>
        )}
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mainImg} alt={local.title} className="aspect-square w-full object-cover" />
          </div>
          {images.length > 1 && (
            <div className="mt-3 flex gap-3">
              {images.slice(1).map((img) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={img}
                  src={img}
                  alt=""
                  className="h-20 w-20 rounded-lg border border-gray-200 object-cover"
                />
              ))}
            </div>
          )}
        </div>

        <div>
          {product.category_name && (
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              {product.category_name}
            </span>
          )}
          <h1 className="mt-1 text-3xl font-bold">{local.title}</h1>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-extrabold">{formatPrice(product.price)}</span>
            {product.compare_at && product.compare_at > product.price && (
              <>
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(product.compare_at)}
                </span>
                <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-600">
                  -{discount}% OFF
                </span>
              </>
            )}
          </div>

          <p className={`mt-3 text-sm font-medium ${product.stock > 0 ? "text-emerald-600" : "text-red-600"}`}>
            {product.stock > 0 ? "In stock — ships within 24h" : "Currently out of stock"}
          </p>

          <ProductBuyBox
            productId={product.id}
            slug={product.slug}
            title={local.title}
            price={product.price}
            image={mainImg}
            stock={product.stock}
          />

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
            <div className="mb-1 font-semibold text-gray-900">Payment methods</div>
            <p>Bitcoin (BTC) · Ethereum (ETH) · USDT (TRC-20) · Litecoin (LTC)</p>
            <p className="mt-1">No credit card or bank account needed. Pay directly with your crypto wallet.</p>
          </div>

          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>✔</span> Free shipping on orders over $50</div>
            <div className="flex gap-2"><span>✔</span> Worldwide tracked delivery</div>
            <div className="flex gap-2"><span>✔</span> 7-day money-back guarantee</div>
          </div>

          <div className="mt-8">
            <h2 className="mb-2 font-semibold">{t("store.product.description")}</h2>
            <div className="whitespace-pre-line text-sm leading-6 text-gray-600">
              {local.description}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">{t("store.product.similar")}</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
