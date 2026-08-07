import Link from "next/link";
import { primaryImage, translateProduct, type Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { getLang } from "@/lib/i18n/server";
import AddToCartButton from "./AddToCartButton";

export default async function ProductCard({ product }: { product: Product }) {
  const lang = await getLang();
  const local = translateProduct(product, lang);
  const img = primaryImage(product);
  const discount =
    product.compare_at && product.compare_at > product.price
      ? Math.round((1 - product.price / product.compare_at) * 100)
      : null;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-lg">
      <Link href={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={local.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {discount && (
          <span className="absolute left-3 top-3 rounded-full bg-red-600 px-2.5 py-1 text-xs font-bold text-white">
            -{discount}%
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        {product.category_name && (
          <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {product.category_name}
          </span>
        )}
        <Link href={`/product/${product.slug}`} className="line-clamp-2 min-h-10 text-sm font-semibold hover:text-gray-600">
          {local.title}
        </Link>
        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          {product.compare_at && product.compare_at > product.price && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.compare_at)}
            </span>
          )}
        </div>
        <AddToCartButton
          productId={product.id}
          slug={product.slug}
          title={local.title}
          price={product.price}
          image={img}
          stock={product.stock}
        />
      </div>
    </div>
  );
}
