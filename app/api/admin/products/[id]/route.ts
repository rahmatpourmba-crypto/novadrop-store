import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/session";
import { slugify } from "@/lib/utils";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const uid = await getSessionUserId();
  if (!uid) return unauthorized();

  const { id } = await params;
  const existing = await db.get<{ id: number; slug: string }>(
    "SELECT id, slug FROM products WHERE id = ?",
    [id]
  );
  if (!existing) return NextResponse.json({ error: "Product not found." }, { status: 404 });

  try {
    const body = await req.json();
    const title = String(body.title || "").trim();
    if (!title) return NextResponse.json({ error: "Title is required." }, { status: 400 });

    let slug = String(body.slug || "").trim() || slugify(title);
    const dup = await db.get<{ id: number }>(
      "SELECT id FROM products WHERE slug = ? AND id != ?",
      [slug, id]
    );
    if (dup) slug = `${slug}-${Date.now().toString(36)}`;

    const price = Number(body.price);
    if (!Number.isFinite(price) || price < 0) {
      return NextResponse.json({ error: "Invalid price." }, { status: 400 });
    }

    await db.run(
      `UPDATE products SET
         slug = ?, title = ?, description = ?, price = ?, compare_at = ?, category_id = ?,
         images = ?, stock = ?, supplier = ?, supplier_sku = ?, is_active = ?, featured = ?,
         updated_at = datetime('now')
       WHERE id = ?`,
      [
        slug,
        title,
        String(body.description || ""),
        price,
        body.compare_at ? Number(body.compare_at) : null,
        body.category_id ? Number(body.category_id) : null,
        JSON.stringify(Array.isArray(body.images) ? body.images : []),
        Number(body.stock) || 0,
        String(body.supplier || ""),
        String(body.supplier_sku || ""),
        body.is_active === false ? 0 : 1,
        body.featured ? 1 : 0,
        id,
      ]
    );

    return NextResponse.json({ ok: true, slug });
  } catch {
    return NextResponse.json({ error: "Could not update product." }, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const uid = await getSessionUserId();
  if (!uid) return unauthorized();

  const { id } = await params;
  await db.run("DELETE FROM products WHERE id = ?", [id]);
  return NextResponse.json({ ok: true });
}
