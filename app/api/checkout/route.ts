import { NextResponse } from "next/server";
import { getSettings, numSetting } from "@/lib/settings";
import { createCustomer, createOrder } from "@/lib/orders";
import { orderId } from "@/lib/utils";
import { getProductById } from "@/lib/products";
import { imagesOf } from "@/lib/products";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, address, city, country, countryCode, zip, items } = body;

    if (!name || !email || !address || !city || !country) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
    }

    const s = getSettings();
    const currency = s.currency || "USD";

    const orderItems: Array<{
      product_id: number;
      title: string;
      slug: string;
      price: number;
      qty: number;
      image: string;
      supplier: string;
      supplier_sku: string;
    }> = [];

    for (const it of items) {
      const product = getProductById(Number(it.product_id));
      if (!product || !product.is_active) {
        return NextResponse.json({ error: "A product in your cart is no longer available." }, { status: 400 });
      }
      const qty = Math.min(Math.max(1, Math.floor(Number(it.qty))), Math.max(product.stock, 1));
      const images = imagesOf(product);
      orderItems.push({
        product_id: product.id,
        title: product.title,
        slug: product.slug,
        price: product.price,
        qty,
        image: images[0] || `https://picsum.photos/seed/${product.slug}/200/200`,
        supplier: product.supplier,
        supplier_sku: product.supplier_sku,
      });
    }

    const subtotal = orderItems.reduce((sum, i) => sum + i.price * i.qty, 0);
    const freeThreshold = numSetting(s, "free_shipping_threshold", 50);
    const shipping = subtotal >= freeThreshold ? 0 : numSetting(s, "shipping_fee", 9.99);
    const total = subtotal + shipping;

    const customerId = createCustomer({
      email: String(email).toLowerCase().trim(),
      name: String(name),
      phone: String(phone || ""),
      country: String(country),
      countryCode: String(countryCode || "").toUpperCase(),
      city: String(city),
      address: String(address),
      zip: String(zip || ""),
    });

    const id = orderId();
    createOrder({ id, customerId, items: orderItems, subtotal, shipping, total, currency });

    return NextResponse.json({ orderId: id, total });
  } catch {
    return NextResponse.json({ error: "Could not create order." }, { status: 500 });
  }
}
