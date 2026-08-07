import { db } from "./db";
import { languages, type Lang } from "./i18n/core";

export interface Product {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  compare_at: number | null;
  category_id: number | null;
  images: string;
  stock: number;
  supplier: string;
  supplier_sku: string;
  supplier_data: string;
  translations: string;
  is_active: number;
  featured: number;
  created_at: string;
  updated_at: string;
  category_name?: string;
  category_slug?: string;
}

export interface Category {
  id: number;
  slug: string;
  name: string;
  description: string;
}

export type ProductTranslations = Record<
  string,
  { title?: string; description?: string }
>;

export function parseTranslations(p: { translations?: string | null }): ProductTranslations {
  if (!p.translations) return {};
  try {
    const parsed = JSON.parse(p.translations);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function translateProduct(
  p: Pick<Product, "title" | "description" | "translations">,
  lang: Lang
): { title: string; description: string } {
  const t = parseTranslations(p)[lang];
  return {
    title: t?.title?.trim() || p.title,
    description: t?.description?.trim() || p.description,
  };
}

export function supportedLangs(): Lang[] {
  return languages.map((l) => l.code as Lang);
}

async function hydrate(p: Product): Promise<Product> {
  const cat = p.category_id
    ? await db.get<{ slug: string; name: string }>(
        "SELECT slug, name FROM categories WHERE id = ?",
        [p.category_id]
      )
    : undefined;
  return { ...p, category_name: cat?.name, category_slug: cat?.slug };
}

export function imagesOf(p: Product): string[] {
  try {
    const arr = JSON.parse(p.images);
    return Array.isArray(arr) ? arr.filter((s) => typeof s === "string") : [];
  } catch {
    return [];
  }
}

export function primaryImage(p: Product): string {
  const imgs = imagesOf(p);
  return imgs[0] || `https://picsum.photos/seed/${p.slug}/900/900`;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const p = await db.get<Product>(
    "SELECT * FROM products WHERE slug = ? AND is_active = 1",
    [slug]
  );
  return p ? hydrate(p) : undefined;
}

export async function getProductById(id: number): Promise<Product | undefined> {
  const p = await db.get<Product>("SELECT * FROM products WHERE id = ?", [id]);
  return p ? hydrate(p) : undefined;
}

export async function listProducts(opts?: {
  category?: string;
  q?: string;
}): Promise<Product[]> {
  let sql = "SELECT * FROM products WHERE is_active = 1";
  const params: Array<string | number | null> = [];
  if (opts?.category) {
    sql += " AND category_id = (SELECT id FROM categories WHERE slug = ?)";
    params.push(opts.category);
  }
  if (opts?.q) {
    sql += " AND (title LIKE ? OR description LIKE ?)";
    params.push(`%${opts.q}%`, `%${opts.q}%`);
  }
  sql += " ORDER BY featured DESC, created_at DESC";
  const rows = await db.all<Product>(sql, params);
  return Promise.all(rows.map(hydrate));
}

export async function listFeatured(): Promise<Product[]> {
  const rows = await db.all<Product>(
    "SELECT * FROM products WHERE is_active = 1 AND featured = 1 ORDER BY id DESC LIMIT 8"
  );
  return Promise.all(rows.map(hydrate));
}

export async function listCategories(): Promise<Category[]> {
  return db.all<Category>(
    `SELECT c.*, (SELECT COUNT(*) FROM products p WHERE p.category_id = c.id AND p.is_active = 1) AS product_count
     FROM categories c ORDER BY c.name`
  );
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return db.get<Category>("SELECT * FROM categories WHERE slug = ?", [slug]);
}

export async function productCount(): Promise<number> {
  const row = await db.get<{ c: number }>(
    "SELECT COUNT(*) AS c FROM products WHERE is_active = 1"
  );
  return row?.c ?? 0;
}
