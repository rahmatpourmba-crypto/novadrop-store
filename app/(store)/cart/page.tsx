"use client";

import Link from "next/link";
import { useCart } from "../cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, subtotal, updateQty, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <div className="text-5xl">🛒</div>
        <h1 className="mt-4 text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-gray-500">Discover trending products and start shopping.</p>
        <Link
          href="/shop"
          className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">Shopping cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.product_id}
              className="flex gap-4 rounded-2xl border border-gray-200 p-4"
            >
              <Link href={`/product/${item.slug}`} className="block h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <Link href={`/product/${item.slug}`} className="font-semibold hover:text-gray-600">
                    {item.title}
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeItem(item.product_id)}
                    className="text-gray-400 hover:text-red-600"
                    aria-label="Remove"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18M8 6V4h8v2m1 0-1 14H8L7 6h10Z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-1 text-sm text-gray-500">{formatPrice(item.price)} each</div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center rounded-lg border border-gray-300">
                    <button
                      type="button"
                      onClick={() => updateQty(item.product_id, item.qty - 1)}
                      className="px-3 py-1.5 text-gray-500 hover:text-gray-900"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-sm font-semibold">{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => updateQty(item.product_id, item.qty + 1)}
                      className="px-3 py-1.5 text-gray-500 hover:text-gray-900"
                    >
                      +
                    </button>
                  </div>
                  <div className="font-bold">{formatPrice(item.price * item.qty)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 font-bold">Order summary</h2>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-gray-500">Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="mt-6 block rounded-lg bg-gray-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700"
          >
            Checkout — pay with crypto
          </Link>
          <Link href="/shop" className="mt-3 block text-center text-sm text-gray-500 hover:text-gray-900">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
