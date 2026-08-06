"use client";

import { useCart } from "../cart-context";

interface Props {
  productId: number;
  slug: string;
  title: string;
  price: number;
  image: string;
  stock: number;
}

export default function AddToCartButton({
  productId,
  slug,
  title,
  price,
  image,
  stock,
}: Props) {
  const { addItem } = useCart();
  const outOfStock = stock <= 0;

  return (
    <button
      type="button"
      disabled={outOfStock}
      onClick={() => addItem({ product_id: productId, slug, title, price, image, stock })}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 6h15l-1.5 9h-12L6 6Zm0 0L5 3H2" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
      </svg>
      {outOfStock ? "Out of stock" : "Add to cart"}
    </button>
  );
}
