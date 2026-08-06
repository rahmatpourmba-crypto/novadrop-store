import { db } from "./db";

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

function hydrate(p: Product): Product {
  const cat = p.category_id
    ? (db
        .prepare("SELECT slug, name FROM categories WHERE id = ?")
        .get(p.category_id) as { slug: string; name: string } | undefined)
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

export function getProductBySlug(slug: string): Product | undefined {
  const p = db
    .prepare("SELECT * FROM products WHERE slug = ? AND is_active = 1")
    .get(slug) as Product | undefined;
  return p ? hydrate(p) : undefined;
}

export function getProductById(id: number): Product | undefined {
  const p = db.prepare("SELECT * FROM products WHERE id = ?").get(id) as
    | Product
    | undefined;
  return p ? hydrate(p) : undefined;
}

export function listProducts(opts?: { category?: string; q?: string }): Product[] {
  let sql = "SELECT * FROM products WHERE is_active = 1";
  const params: Array<string | number> = [];
  if (opts?.category) {
    sql += " AND category_id = (SELECT id FROM categories WHERE slug = ?)";
    params.push(opts.category);
  }
  if (opts?.q) {
    sql += " AND (title LIKE ? OR description LIKE ?)";
    params.push(`%${opts.q}%`, `%${opts.q}%`);
  }
  sql += " ORDER BY featured DESC, created_at DESC";
  const rows = db.prepare(sql).all(...params) as Product[];
  return rows.map(hydrate);
}

export function listFeatured(): Product[] {
  const rows = db
    .prepare("SELECT * FROM products WHERE is_active = 1 AND featured = 1 ORDER BY id DESC LIMIT 8")
    .all() as Product[];
  return rows.map(hydrate);
}

export function listCategories(): Category[] {
  return db
    .prepare(
      `SELECT c.*, (SELECT COUNT(*) FROM products p WHERE p.category_id = c.id AND p.is_active = 1) AS product_count
       FROM categories c ORDER BY c.name`
    )
    .all() as Category[];
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return db.prepare("SELECT * FROM categories WHERE slug = ?").get(slug) as
    | Category
    | undefined;
}

export function productCount(): number {
  return (
    db.prepare("SELECT COUNT(*) AS c FROM products WHERE is_active = 1").get() as {
      c: number;
    }
  ).c;
}
