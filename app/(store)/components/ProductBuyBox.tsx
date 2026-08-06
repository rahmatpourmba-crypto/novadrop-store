"use client";

import { useState } from "react";
import { useCart } from "../cart-context";

interface Props {
  productId: number;
  slug: string;
  title: string;
  price: number;
  image: string;
  stock: number;
}

export default function ProductBuyBox(props: Props) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const outOfStock = props.stock <= 0;

  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex items-center rounded-lg border border-gray-300">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="px-3 py-2.5 text-gray-500 hover:text-gray-900"
        >
          −
        </button>
        <span className="w-10 text-center text-sm font-semibold">{qty}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQty((q) => Math.min(Math.max(props.stock, 1), q + 1))}
          className="px-3 py-2.5 text-gray-500 hover:text-gray-900"
        >
          +
        </button>
      </div>
      <button
        type="button"
        disabled={outOfStock}
        onClick={() =>
          addItem(
            {
              product_id: props.productId,
              slug: props.slug,
              title: props.title,
              price: props.price,
              image: props.image,
              stock: props.stock,
            },
            qty
          )
        }
        className="flex-1 rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {outOfStock ? "Out of stock" : "Add to cart"}
      </button>
    </div>
  );
}
