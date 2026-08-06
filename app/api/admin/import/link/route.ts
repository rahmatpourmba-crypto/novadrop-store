import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { db } from "@/lib/db";
import { slugify } from "@/lib/utils";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function metaTag(html: string, property: string): string {
  const re = new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]*>`, "i");
  const m = html.match(re);
  if (!m) return "";
  const content = m[0].match(/content=["']([^"']+)["']/i);
  return content ? content[1].trim() : "";
}

function guessSupplier(url: string): string {
  const host = url.toLowerCase();
  if (host.includes("aliexpress")) return "AliExpress";
  if (host.includes("cjdropshipping")) return "CJ Dropshipping";
  if (host.includes("amazon")) return "Amazon";
  if (host.includes("ebay")) return "eBay";
  return "Imported";
}

export async function POST(req: Request) {
  const uid = await getSessionUserId();
  if (!uid) return unauthorized();

  try {
    const body = await req.json();
    const url = String(body.url || "").trim();
    if (!/^https?:\/\//i.test(url)) {
      return NextResponse.json({ error: "Enter a valid product URL (https://…)." }, { status: 400 });
    }
    const price = Number(body.price);
    if (!Number.isFinite(price) || price <= 0) {
      return NextResponse.json({ error: "Enter a selling price for the product." }, { status: 400 });
    }

    let html = "";
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(15000),
        headers: { "user-agent": "Mozilla/5.0 (compatible; NovaDropImport/1.0)" },
        redirect: "follow",
      });
      html = await res.text();
    } catch {
      // best-effort: allow importing with a manually entered title
    }

    const title =
      String(body.title || "").trim() || metaTag(html, "og:title") || (html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? "").trim();

    if (!title) {
      return NextResponse.json({ error: "Could not detect a product title. Enter a title manually." }, { status: 422 });
    }

    const image = metaTag(html, "og:image") || metaTag(html, "twitter:image") || "";
    const description = metaTag(html, "og:description") || String(body.description || "");
    const supplier = String(body.supplier || "").trim() || guessSupplier(url);

    let slug = slugify(title);
    if (db.prepare("SELECT id FROM products WHERE slug = ?").get(slug)) {
      slug = `${slug}-${Date.now().toString(36)}`;
    }

    const info = db
      .prepare(
        `INSERT INTO products
           (slug, title, description, price, category_id, images, stock, supplier, supplier_sku, is_active, featured)
         VALUES (?, ?, ?, ?, ?, ?, 100, ?, ?, 1, 0)`
      )
      .run(
        slug,
        title,
        description,
        price,
        body.category_id ? Number(body.category_id) : null,
        JSON.stringify(image ? [image] : []),
        supplier,
        url.slice(0, 200)
      );

    return NextResponse.json({
      ok: true,
      id: Number(info.lastInsertRowid),
      slug,
      title,
      source: supplier,
    });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Import failed." }, { status: 500 });
  }
}
