import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/session";
import { slugify } from "@/lib/utils";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function POST(req: Request) {
  const uid = await getSessionUserId();
  if (!uid) return unauthorized();

  try {
    const body = await req.json();
    const title = String(body.title || "").trim();
    if (!title) return NextResponse.json({ error: "Title is required." }, { status: 400 });

    let slug = String(body.slug || "").trim() || slugify(title);
    if (await db.get("SELECT id FROM products WHERE slug = ?", [slug])) {
      slug = `${slug}-${Date.now().toString(36)}`;
    }

    const images = Array.isArray(body.images) ? body.images : [];
    const price = Number(body.price);
    if (!Number.isFinite(price) || price < 0) {
      return NextResponse.json({ error: "Invalid price." }, { status: 400 });
    }

    const id = await db.insert(
      `INSERT INTO products
       (slug, title, description, price, compare_at, category_id, images, stock, supplier, supplier_sku, supplier_data, is_active, featured)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        slug,
        title,
        String(body.description || ""),
        price,
        body.compare_at ? Number(body.compare_at) : null,
        body.category_id ? Number(body.category_id) : null,
        JSON.stringify(images),
        Number(body.stock) || 0,
        String(body.supplier || ""),
        String(body.supplier_sku || ""),
        String(body.supplier_data || "{}"),
        body.is_active === false ? 0 : 1,
        body.featured ? 1 : 0,
      ]
    );

    return NextResponse.json({ id, slug });
  } catch {
    return NextResponse.json({ error: "Could not create product." }, { status: 500 });
  }
}
