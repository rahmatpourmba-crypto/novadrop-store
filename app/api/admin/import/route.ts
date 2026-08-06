import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { db, withTx } from "@/lib/db";
import { slugify } from "@/lib/utils";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  const src = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (inQuotes) {
      if (c === '"') {
        if (src[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      if (row.some((x) => x.trim() !== "")) rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  row.push(field);
  if (row.some((x) => x.trim() !== "")) rows.push(row);
  return rows;
}

function parseImages(v: string): string[] {
  const parts = v.split(/[|;]/).map((s) => s.trim()).filter((s) => s.length > 0);
  return parts.length ? parts : [];
}

export async function POST(req: Request) {
  const uid = await getSessionUserId();
  if (!uid) return unauthorized();

  try {
    const body = await req.json();
    const csv = String(body.csv || "");
    const hasHeader = body.hasHeader !== false;
    if (!csv.trim()) {
      return NextResponse.json({ error: "CSV is empty." }, { status: 400 });
    }

    const rows = parseCsv(csv);
    if (rows.length < 1) {
      return NextResponse.json({ error: "No data rows found." }, { status: 400 });
    }

    const header = hasHeader ? rows[0].map((h) => h.trim().toLowerCase()) : null;
    const dataRows = hasHeader ? rows.slice(1) : rows;

    const get = (r: string[], keys: string[], idx: number): string =>
      keys.length > 0 ? keys.map((k) => header?.indexOf(k) ?? -1).filter((i) => i >= 0).map((i) => r[i] ?? "").filter(Boolean)[0] ?? "" : (r[idx] ?? "");

    const catBySlug = new Map(
      (
        await db.all<{ id: number; slug: string; name: string }>(
          "SELECT id, slug, name FROM categories"
        )
      ).map((c) => [c.slug, c])
    );

    const imported: Array<{ title: string; slug: string }> = [];
    const errors: Array<{ row: number; error: string }> = [];

    await withTx(async (tx) => {
      for (let i = 0; i < dataRows.length; i++) {
        const r = dataRows[i];
        const rowNum = i + (hasHeader ? 2 : 1);
        try {
          const title = get(r, ["title", "name"], 0).trim();
          const price = parseFloat(get(r, ["price", "sell price"], 1));
          if (!title) throw new Error("missing title");
          if (!Number.isFinite(price) || price <= 0) throw new Error("invalid price");
          const images = parseImages(get(r, ["images", "image", "image url", "imageurl"], 2));
          const stock = parseInt(get(r, ["stock", "quantity", "qty"], 3), 10);
          const description = get(r, ["description", "body"], 4);
          const supplier = get(r, ["supplier"], 5);
          const supplierSku = get(r, ["supplier sku", "sku"], 6);
          const categoryName = get(r, ["category"], 7).trim();

          let categoryId: number | null = null;
          if (categoryName) {
            const slug = slugify(categoryName);
            let cat = catBySlug.get(slug);
            if (!cat) {
              const id = await tx.insert(
                "INSERT INTO categories (slug, name) VALUES (?, ?)",
                [slug, categoryName]
              );
              cat = { id, slug, name: categoryName };
              catBySlug.set(slug, cat);
            }
            categoryId = cat.id;
          }

          let slug = slugify(title);
          if (await tx.get("SELECT id FROM products WHERE slug = ?", [slug])) {
            slug = `${slug}-${Date.now().toString(36)}${i}`;
          }

          await tx.run(
            `INSERT INTO products
               (slug, title, description, price, compare_at, category_id, images, stock, supplier, supplier_sku, is_active, featured)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0)`,
            [
              slug,
              title,
              description,
              price,
              null,
              categoryId,
              JSON.stringify(images),
              Number.isFinite(stock) ? stock : 0,
              supplier,
              supplierSku,
            ]
          );
          imported.push({ title, slug });
        } catch (e) {
          errors.push({ row: rowNum, error: e instanceof Error ? e.message : "failed" });
        }
      }
    });

    return NextResponse.json({ ok: true, imported: imported.length, errors });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Import failed." }, { status: 500 });
  }
}
