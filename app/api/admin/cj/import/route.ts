import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { db, withTx } from "@/lib/db";
import { slugify } from "@/lib/utils";
import { searchProducts, getVariants } from "@/lib/cj";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(req: Request) {
  const uid = await getSessionUserId();
  if (!uid) return unauthorized();

  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") ?? "";
  const pid = searchParams.get("pid") ?? "";

  try {
    if (pid) {
      const detail = await getVariants(pid);
      return NextResponse.json({ detail });
    }
    const products = await searchProducts(q, 1, 12);
    return NextResponse.json({ products });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "CJ request failed." }, { status: 502 });
  }
}

export async function POST(req: Request) {
  const uid = await getSessionUserId();
  if (!uid) return unauthorized();

  try {
    const body = await req.json();
    const pid = String(body.pid || "").trim();
    const vids = Array.isArray(body.variantVids) ? body.variantVids.map(String) : [];
    if (!pid || vids.length === 0) {
      return NextResponse.json({ error: "Select a product and at least one variant." }, { status: 400 });
    }

    const detail = await getVariants(pid);
    if (!detail?.pid) {
      return NextResponse.json({ error: "CJ product not found." }, { status: 404 });
    }

    const markup = Number(body.markup) || 2.5;
    const categoryId = body.category_id ? Number(body.category_id) : null;
    const featured = body.featured ? 1 : 0;
    const isActive = body.is_active === false ? 0 : 1;
    const baseName = detail.productNameEn || "CJ Product";
    const baseImage = detail.productImage || "";

    const created: Array<{ id: number; slug: string; title: string }> = [];
    await withTx(async (tx) => {
      for (const v of detail.variants) {
        if (!vids.includes(v.vid)) continue;
        const title = vids.length > 1 && v.variantNameEn ? `${baseName} - ${v.variantNameEn}` : baseName;
        let slug = slugify(title);
        if (await tx.get("SELECT id FROM products WHERE slug = ?", [slug])) {
          slug = `${slug}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
        }
        const price = Math.max(Number(v.variantSellPrice) * markup, 0.99);
        const images = JSON.stringify([v.variantImage || baseImage].filter(Boolean));
        const supplierData = JSON.stringify({
          pid,
          vid: v.vid,
          variantSku: v.variantSku,
          variantNameEn: v.variantNameEn,
          baseImage,
        });
        const id = await tx.insert(
          `INSERT INTO products
             (slug, title, description, price, compare_at, category_id, images, stock, supplier, supplier_sku, supplier_data, is_active, featured)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'CJ', ?, ?, ?, ?)`,
          [
            slug,
            title,
            "",
            Math.round(price * 100) / 100,
            null,
            categoryId,
            images,
            Number(v.variantStock) || 0,
            v.variantSku,
            supplierData,
            isActive,
            featured,
          ]
        );
        created.push({ id, slug, title });
      }
    });

    if (created.length === 0) {
      return NextResponse.json({ error: "No variants matched." }, { status: 400 });
    }
    return NextResponse.json({ ok: true, imported: created.length, created });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Import failed." }, { status: 502 });
  }
}
