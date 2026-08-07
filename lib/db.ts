import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import bcrypt from "bcryptjs";
import pg from "pg";

export type SqlParams = Array<string | number | null>;

// Postgres returns INT8 (COUNT, etc.) as strings by default; coerce to number.
pg.types.setTypeParser(20, (v) => parseInt(v, 10));

declare global {
  // eslint-disable-next-line no-var
  var __storeDb: Database.Database | undefined;
  // eslint-disable-next-line no-var
  var __pgPool: pg.Pool | undefined;
  // eslint-disable-next-line no-var
  var __pgInit: Promise<void> | undefined;
}

export interface TxClient {
  get(sql: string, params?: SqlParams): Promise<unknown>;
  all(sql: string, params?: SqlParams): Promise<unknown[]>;
  run(sql: string, params?: SqlParams): Promise<{ changes: number }>;
  insert(sql: string, params?: SqlParams): Promise<number>;
}

interface Backend extends TxClient {
  ensure(): Promise<void>;
  withTx<T>(fn: (tx: TxClient) => Promise<T>): Promise<T>;
}

/* ------------------------------------------------------------------ */
/* SQLite backend (local development)                                  */
/* ------------------------------------------------------------------ */

const DEFAULT_SETTINGS: Record<string, string> = {
  store_name: "NovaDrop",
  store_tagline: "Global dropshipping store — pay with crypto",
  store_email: "support@novadrop.example",
  support_email: "support@novadrop.example",
  currency: "USD",
  shipping_fee: "9.99",
  free_shipping_threshold: "50",
  nowpayments_api_key: "",
  nowpayments_ipn_secret: "",
  supplier_email: "",
  auto_approve_manual: "0",
  manual_mode: "1",
  address_btc: "",
  address_eth: "",
  address_usdt_trc20: "",
  address_ltc: "",
  exchange_btc: "",
  exchange_eth: "",
  exchange_usdt: "",
  exchange_ltc: "",
  welcome_note: "Welcome to NovaDrop — fast global shipping. Pay securely with Bitcoin, Ethereum, USDT or Litecoin.",
  order_email_subject: "New order received",
  order_email_body: "A new order has been placed. Please ship the items to the customer.",
};

const SEED_CATEGORIES = [
  { slug: "electronics", name: "Electronics & Gadgets", description: "Smart gadgets and accessories shipped worldwide." },
  { slug: "fashion", name: "Fashion & Apparel", description: "Trendy clothing and accessories." },
  { slug: "home", name: "Home & Living", description: "Home decor and everyday essentials." },
  { slug: "fitness", name: "Fitness & Outdoors", description: "Gear for workouts and outdoor adventures." },
];

const SEED_PRODUCTS: Array<{
  slug: string;
  title: string;
  description: string;
  price: number;
  compare_at: number | null;
  category: string;
  stock: number;
  supplier: string;
  supplier_sku: string;
  featured: number;
}> = [
  {
    slug: "wireless-charger-3-in-1",
    title: "Magnetic 3-in-1 Wireless Charging Stand",
    description:
      "Charge your phone, earbuds and smartwatch simultaneously with this sleek magnetic charging stand. Fast wireless charging with built-in overheat protection. Folds flat for travel.\n\n• 3-in-1 magnetic charging\n• 15W fast charge\n• Foldable & travel friendly\n• Universal compatibility",
    price: 39.99,
    compare_at: 59.99,
    category: "electronics",
    stock: 250,
    supplier: "CJ Dropshipping",
    supplier_sku: "CJ-WC-3001",
    featured: 1,
  },
  {
    slug: "led-neon-sign",
    title: "Custom LED Neon Sign with Remote",
    description:
      "Create a stunning atmosphere in any room with this customizable LED neon sign. Comes with 16 color modes, dimming and 12-hour timer. USB powered and easy to mount.\n\n• 16 colors + auto fade\n• Remote control included\n• USB powered\n• DIY customization available",
    price: 29.99,
    compare_at: 49.99,
    category: "home",
    stock: 180,
    supplier: "CJ Dropshipping",
    supplier_sku: "CJ-LED-1102",
    featured: 1,
  },
  {
    slug: "fitness-resistance-bands",
    title: "Professional Resistance Bands Set (5 Pack)",
    description:
      "Complete home workout solution with 5 resistance levels. Made from premium natural latex, each band has anti-slip handles and an ankle strap. Includes carrying bag and workout guide.\n\n• 5 resistance levels (10-50 lbs)\n• Anti-slip grip\n• Includes door anchor + ankle straps\n• Free workout guide",
    price: 24.99,
    compare_at: null,
    category: "fitness",
    stock: 400,
    supplier: "AutoDS",
    supplier_sku: "ADS-RB-5500",
    featured: 1,
  },
  {
    slug: "smart-watch-s7",
    title: "Ultra Smart Watch with Bluetooth Calls",
    description:
      "Stay connected on the go. 1.8 inch HD display, Bluetooth calling, heart rate and blood oxygen monitoring, 100+ sport modes and 7-day battery life. IP68 waterproof.\n\n• Bluetooth calling\n• Heart rate + SpO2 monitor\n• 100+ sport modes\n• 7-day battery life",
    price: 45.99,
    compare_at: 79.99,
    category: "electronics",
    stock: 320,
    supplier: "AutoDS",
    supplier_sku: "ADS-SW-2233",
    featured: 1,
  },
  {
    slug: "portable-blender",
    title: "Portable USB Rechargeable Blender",
    description:
      "Blend smoothies, shakes and juices anywhere. 380ml BPA-free bottle, 6 stainless steel blades, USB-C fast charging. Perfect for gym, office and travel.\n\n• 380ml capacity\n• USB-C charging\n• 6 stainless steel blades\n• Leak-proof design",
    price: 32.99,
    compare_at: 44.99,
    category: "home",
    stock: 210,
    supplier: "CJ Dropshipping",
    supplier_sku: "CJ-BL-3309",
    featured: 0,
  },
  {
    slug: "retro-mini-console",
    title: "Retro Mini Game Console (500 Games)",
    description:
      "500 classic games pre-loaded in a pocket-sized console. 3 inch screen, rechargeable battery and HDMI TV output. A perfect nostalgic gift.\n\n• 500 built-in games\n• HDMI output to TV\n• 3 inch LCD screen\n• Rechargeable 2000mAh battery",
    price: 27.99,
    compare_at: 39.99,
    category: "electronics",
    stock: 150,
    supplier: "CJ Dropshipping",
    supplier_sku: "CJ-GM-8812",
    featured: 1,
  },
  {
    slug: "wireless-earbuds-pro",
    title: "ANC Wireless Earbuds with Charging Case",
    description:
      "Premium active noise cancelling earbuds with 30 hours total battery. Touch controls, IPX5 water resistance and low-latency game mode.\n\n• Active noise cancelling\n• 30h total battery life\n• Touch controls\n• IPX5 waterproof",
    price: 49.99,
    compare_at: 89.99,
    category: "electronics",
    stock: 500,
    supplier: "AutoDS",
    supplier_sku: "ADS-EB-7788",
    featured: 1,
  },
  {
    slug: "unisex-oversized-hoodie",
    title: "Oversized Fleece Hoodie (Unisex)",
    description:
      "Cozy, heavyweight 350gsm fleece hoodie with a relaxed oversized fit. Double-lined hood, kangaroo pocket and ribbed cuffs. Available in 5 colors.\n\n• 350gsm brushed fleece\n• Oversized fit\n• Double-lined hood\n• Machine washable",
    price: 34.99,
    compare_at: 49.99,
    category: "fashion",
    stock: 600,
    supplier: "CJ Dropshipping",
    supplier_sku: "CJ-HD-4455",
    featured: 1,
  },
  {
    slug: "capsule-espresso-machine",
    title: "Mini Capsule Espresso Machine",
    description:
      "Brew barista-quality espresso in under a minute. Compact design fits any kitchen, 20-bar pump pressure and comes with 20 starter capsules.\n\n• 20 bar pump pressure\n• 30s heat-up time\n• Compact design\n• 20 capsules included",
    price: 89.99,
    compare_at: 129.99,
    category: "home",
    stock: 80,
    supplier: "AutoDS",
    supplier_sku: "ADS-ES-6611",
    featured: 0,
  },
  {
    slug: "yoga-mat-pro",
    title: "Non-Slip Pro Yoga Mat with Alignment Lines",
    description:
      "High-density 6mm TPE yoga mat with body alignment lines and carrying strap. Non-slip on both sides, sweat resistant and easy to clean.\n\n• 6mm high density TPE\n• Alignment lines\n• Non-slip both sides\n• Carrying strap included",
    price: 22.99,
    compare_at: 34.99,
    category: "fitness",
    stock: 350,
    supplier: "AutoDS",
    supplier_sku: "ADS-YM-3344",
    featured: 0,
  },
  {
    slug: "mini-projector",
    title: "Portable HD Mini Projector 1080P",
    description:
      "Turn any wall into a cinema. Native 1080P resolution, 100 inch projection, built-in speakers and wireless phone mirroring. Perfect for movie nights.\n\n• Full HD 1080P\n• Up to 100 inch screen\n• Wireless mirroring\n• Built-in 5W speaker",
    price: 119.99,
    compare_at: 179.99,
    category: "electronics",
    stock: 60,
    supplier: "CJ Dropshipping",
    supplier_sku: "CJ-PJ-9090",
    featured: 1,
  },
  {
    slug: "aesthetic-decor-lamp",
    title: "Aesthetic Sunset Projection Lamp",
    description:
      "Bring the golden hour indoors with this sunset projection lamp. Creates a warm ambient glow for photos and relaxation. USB powered with adjustable angle.\n\n• Sunset gradient projection\n• 360° adjustable head\n• USB powered\n• Great for photos",
    price: 18.99,
    compare_at: 27.99,
    category: "home",
    stock: 450,
    supplier: "CJ Dropshipping",
    supplier_sku: "CJ-LP-2277",
    featured: 0,
  },
];

const SQLITE_SCHEMA = `
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT
);

CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT DEFAULT ''
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  price REAL NOT NULL,
  compare_at REAL,
  category_id INTEGER REFERENCES categories(id),
  images TEXT DEFAULT '[]',
  stock INTEGER NOT NULL DEFAULT 0,
  supplier TEXT DEFAULT '',
  supplier_sku TEXT DEFAULT '',
  supplier_data TEXT DEFAULT '{}',
  translations TEXT DEFAULT '{}',
  is_active INTEGER NOT NULL DEFAULT 1,
  featured INTEGER NOT NULL DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  phone TEXT DEFAULT '',
  country TEXT DEFAULT '',
  country_code TEXT DEFAULT '',
  city TEXT DEFAULT '',
  address TEXT DEFAULT '',
  zip TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  items TEXT NOT NULL,
  subtotal REAL NOT NULL,
  shipping REAL NOT NULL DEFAULT 0,
  total REAL NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  currency TEXT NOT NULL DEFAULT 'USD',
  tracking TEXT DEFAULT '',
  admin_note TEXT DEFAULT '',
  supplier_order_id TEXT DEFAULT '',
  supplier_cost REAL,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS payments (
  id TEXT PRIMARY KEY,
  order_id TEXT REFERENCES orders(id),
  provider TEXT NOT NULL,
  currency TEXT NOT NULL,
  amount_usd REAL NOT NULL,
  amount_crypto REAL NOT NULL,
  address TEXT DEFAULT '',
  txid TEXT DEFAULT '',
  status TEXT NOT NULL DEFAULT 'pending',
  external_id TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  admin_user_id INTEGER NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  expires_at TEXT NOT NULL
);
`;

const PG_SCHEMA = `
CREATE TABLE IF NOT EXISTS settings (
  "key" TEXT PRIMARY KEY,
  value TEXT
);

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT DEFAULT ''
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  price DOUBLE PRECISION NOT NULL,
  compare_at DOUBLE PRECISION,
  category_id INTEGER REFERENCES categories(id),
  images TEXT DEFAULT '[]',
  stock INTEGER NOT NULL DEFAULT 0,
  supplier TEXT DEFAULT '',
  supplier_sku TEXT DEFAULT '',
  supplier_data TEXT DEFAULT '{}',
  translations TEXT DEFAULT '{}',
  is_active INTEGER NOT NULL DEFAULT 1,
  featured INTEGER NOT NULL DEFAULT 0,
  created_at TEXT DEFAULT (to_char(now(), 'YYYY-MM-DD HH24:MI:SS')),
  updated_at TEXT DEFAULT (to_char(now(), 'YYYY-MM-DD HH24:MI:SS'))
);

CREATE TABLE IF NOT EXISTS customers (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  phone TEXT DEFAULT '',
  country TEXT DEFAULT '',
  country_code TEXT DEFAULT '',
  city TEXT DEFAULT '',
  address TEXT DEFAULT '',
  zip TEXT DEFAULT '',
  created_at TEXT DEFAULT (to_char(now(), 'YYYY-MM-DD HH24:MI:SS'))
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  items TEXT NOT NULL,
  subtotal DOUBLE PRECISION NOT NULL,
  shipping DOUBLE PRECISION NOT NULL DEFAULT 0,
  total DOUBLE PRECISION NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  currency TEXT NOT NULL DEFAULT 'USD',
  tracking TEXT DEFAULT '',
  admin_note TEXT DEFAULT '',
  supplier_order_id TEXT DEFAULT '',
  supplier_cost DOUBLE PRECISION,
  created_at TEXT DEFAULT (to_char(now(), 'YYYY-MM-DD HH24:MI:SS')),
  updated_at TEXT DEFAULT (to_char(now(), 'YYYY-MM-DD HH24:MI:SS'))
);

CREATE TABLE IF NOT EXISTS payments (
  id TEXT PRIMARY KEY,
  order_id TEXT REFERENCES orders(id),
  provider TEXT NOT NULL,
  currency TEXT NOT NULL,
  amount_usd DOUBLE PRECISION NOT NULL,
  amount_crypto DOUBLE PRECISION NOT NULL,
  address TEXT DEFAULT '',
  txid TEXT DEFAULT '',
  status TEXT NOT NULL DEFAULT 'pending',
  external_id TEXT DEFAULT '',
  created_at TEXT DEFAULT (to_char(now(), 'YYYY-MM-DD HH24:MI:SS')),
  updated_at TEXT DEFAULT (to_char(now(), 'YYYY-MM-DD HH24:MI:SS'))
);

CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT (to_char(now(), 'YYYY-MM-DD HH24:MI:SS'))
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  admin_user_id INTEGER NOT NULL,
  created_at TEXT DEFAULT (to_char(now(), 'YYYY-MM-DD HH24:MI:SS')),
  expires_at TEXT NOT NULL
);
`;

class SqliteBackend implements Backend {
  private db(): Database.Database {
    if (!globalThis.__storeDb) {
      const dataDir = path.join(process.cwd(), "data");
      fs.mkdirSync(dataDir, { recursive: true });
      const dbPath = process.env.DATABASE_PATH || path.join(dataDir, "store.db");
      const db = new Database(dbPath);
      db.pragma("journal_mode = WAL");
      db.pragma("foreign_keys = ON");
      db.exec(SQLITE_SCHEMA);
      this.migrate(db);
      this.seedIfEmpty(db);
      globalThis.__storeDb = db;
    }
    return globalThis.__storeDb;
  }

  private migrate(db: Database.Database) {
    const cols = db.prepare("PRAGMA table_info(customers)").all() as Array<{ name: string }>;
    if (!cols.some((c) => c.name === "country_code")) {
      db.exec("ALTER TABLE customers ADD COLUMN country_code TEXT DEFAULT ''");
    }
    const ocols = db.prepare("PRAGMA table_info(orders)").all() as Array<{ name: string }>;
    if (!ocols.some((c) => c.name === "supplier_order_id")) {
      db.exec("ALTER TABLE orders ADD COLUMN supplier_order_id TEXT DEFAULT ''");
    }
    if (!ocols.some((c) => c.name === "supplier_cost")) {
      db.exec("ALTER TABLE orders ADD COLUMN supplier_cost REAL");
    }
    const pcols = db.prepare("PRAGMA table_info(products)").all() as Array<{ name: string }>;
    if (!pcols.some((c) => c.name === "supplier_data")) {
      db.exec("ALTER TABLE products ADD COLUMN supplier_data TEXT DEFAULT '{}'");
    }
    if (!pcols.some((c) => c.name === "translations")) {
      db.exec("ALTER TABLE products ADD COLUMN translations TEXT DEFAULT '{}'");
    }
  }

  private seedIfEmpty(db: Database.Database) {
    const count = db.prepare("SELECT COUNT(*) AS c FROM products").get() as { c: number };
    if (count.c > 0) return;

    const setSetting = db.prepare(
      'INSERT OR IGNORE INTO settings ("key", value) VALUES (?, ?)'
    );
    for (const [k, v] of Object.entries(DEFAULT_SETTINGS)) {
      setSetting.run(k, v);
    }

    const insCat = db.prepare(
      "INSERT OR IGNORE INTO categories (slug, name, description) VALUES (?, ?, ?)"
    );
    const catIds: Record<string, number> = {};
    for (const c of SEED_CATEGORIES) {
      insCat.run(c.slug, c.name, c.description);
      catIds[c.slug] = (db.prepare("SELECT id FROM categories WHERE slug = ?").get(c.slug) as { id: number }).id;
    }

    const insProduct = db.prepare(
      `INSERT OR IGNORE INTO products (slug, title, description, price, compare_at, category_id, images, stock, supplier, supplier_sku, is_active, featured)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)`
    );
    for (const p of SEED_PRODUCTS) {
      const images = JSON.stringify([
        `https://picsum.photos/seed/${p.slug}/900/900`,
        `https://picsum.photos/seed/${p.slug}-2/900/900`,
      ]);
      insProduct.run(
        p.slug,
        p.title,
        p.description,
        p.price,
        p.compare_at,
        catIds[p.category],
        images,
        p.stock,
        p.supplier,
        p.supplier_sku,
        p.featured
      );
    }

    const adminCount = db.prepare("SELECT COUNT(*) AS c FROM admin_users").get() as { c: number };
    if (adminCount.c === 0) {
      const hash = bcrypt.hashSync("admin123", 10);
      db.prepare('INSERT OR IGNORE INTO admin_users (username, password_hash) VALUES (?, ?)').run(
        "admin",
        hash
      );
    }
  }

  async ensure(): Promise<void> {
    this.db();
  }

  async get(sql: string, params: SqlParams = []): Promise<unknown> {
    return this.db().prepare(sql).get(...params) ?? undefined;
  }

  async all(sql: string, params: SqlParams = []): Promise<unknown[]> {
    return this.db().prepare(sql).all(...params);
  }

  async run(sql: string, params: SqlParams = []): Promise<{ changes: number }> {
    const info = this.db().prepare(sql).run(...params);
    return { changes: info.changes };
  }

  async insert(sql: string, params: SqlParams = []): Promise<number> {
    const info = this.db().prepare(sql).run(...params);
    return Number(info.lastInsertRowid);
  }

  async withTx<T>(fn: (tx: TxClient) => Promise<T>): Promise<T> {
    const db = this.db();
    const tx: TxClient = {
      get: async (s, p = []) => db.prepare(s).get(...p) ?? undefined,
      all: async (s, p = []) => db.prepare(s).all(...p),
      run: async (s, p = []) => ({ changes: db.prepare(s).run(...p).changes }),
      insert: async (s, p = []) => Number(db.prepare(s).run(...p).lastInsertRowid),
    };
    return fn(tx);
  }
}

/* ------------------------------------------------------------------ */
/* Postgres backend (production / Netlify)                             */
/* ------------------------------------------------------------------ */

class PgBackend implements Backend {
  private pool(): pg.Pool {
    if (!globalThis.__pgPool) {
      const url = process.env.DATABASE_URL!;
      globalThis.__pgPool = new pg.Pool({
        connectionString: url,
        max: 5,
        idleTimeoutMillis: 30000,
        ...(/neon\.tech/.test(url) || url.includes("sslmode=require")
          ? { ssl: { rejectUnauthorized: false } }
          : {}),
      });
    }
    return globalThis.__pgPool;
  }

  /** Adapts shared SQL (SQLite-style) to Postgres. */
  private toPg(sql: string): string {
    let n = 0;
    return sql
      .replace(/datetime\('now'\)/g, "to_char(now(), 'YYYY-MM-DD HH24:MI:SS')")
      .replace(/\?/g, () => `$${++n}`);
  }

  async ensure(): Promise<void> {
    if (!globalThis.__pgInit) {
      globalThis.__pgInit = (async () => {
        const pool = this.pool();
        await pool.query(PG_SCHEMA);
        await this.migrate(pool);
        await this.seedIfEmpty(pool);
      })();
    }
    return globalThis.__pgInit;
  }

  private async migrate(pool: pg.Pool) {
    const cols = await pool.query(
      `SELECT column_name FROM information_schema.columns
       WHERE table_name = 'products' AND column_name = 'translations'`
    );
    if (cols.rowCount === 0) {
      await pool.query("ALTER TABLE products ADD COLUMN translations TEXT DEFAULT '{}'");
    }
    const orderCols = await pool.query(
      `SELECT column_name FROM information_schema.columns
       WHERE table_name = 'orders' AND column_name = 'supplier_cost'`
    );
    if (orderCols.rowCount === 0) {
      await pool.query("ALTER TABLE orders ADD COLUMN supplier_cost DOUBLE PRECISION");
    }
  }

  private async seedIfEmpty(pool: pg.Pool) {
    const count = await pool.query("SELECT COUNT(*) AS c FROM products");
    if (Number(count.rows[0]?.c ?? 0) > 0) return;

    for (const [k, v] of Object.entries(DEFAULT_SETTINGS)) {
      await pool.query(
        'INSERT INTO settings ("key", value) VALUES ($1, $2) ON CONFLICT ("key") DO NOTHING',
        [k, v]
      );
    }

    const catIds: Record<string, number> = {};
    for (const c of SEED_CATEGORIES) {
      await pool.query(
        "INSERT INTO categories (slug, name, description) VALUES ($1, $2, $3) ON CONFLICT (slug) DO NOTHING",
        [c.slug, c.name, c.description]
      );
      const row = await pool.query("SELECT id FROM categories WHERE slug = $1", [c.slug]);
      catIds[c.slug] = Number(row.rows[0]?.id ?? 0);
    }

    for (const p of SEED_PRODUCTS) {
      const images = JSON.stringify([
        `https://picsum.photos/seed/${p.slug}/900/900`,
        `https://picsum.photos/seed/${p.slug}-2/900/900`,
      ]);
      await pool.query(
        `INSERT INTO products (slug, title, description, price, compare_at, category_id, images, stock, supplier, supplier_sku, is_active, featured)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 1, $11)
         ON CONFLICT (slug) DO NOTHING`,
        [p.slug, p.title, p.description, p.price, p.compare_at, catIds[p.category], images, p.stock, p.supplier, p.supplier_sku, p.featured]
      );
    }

    const admin = await pool.query("SELECT COUNT(*) AS c FROM admin_users");
    if (Number(admin.rows[0]?.c ?? 0) === 0) {
      const hash = bcrypt.hashSync("admin123", 10);
      await pool.query("INSERT INTO admin_users (username, password_hash) VALUES ($1, $2)", [
        "admin",
        hash,
      ]);
    }
  }

  async get(sql: string, params: SqlParams = []): Promise<unknown> {
    const res = await this.pool().query(this.toPg(sql), params);
    return res.rows[0] ?? undefined;
  }

  async all(sql: string, params: SqlParams = []): Promise<unknown[]> {
    const res = await this.pool().query(this.toPg(sql), params);
    return res.rows;
  }

  async run(sql: string, params: SqlParams = []): Promise<{ changes: number }> {
    const res = await this.pool().query(this.toPg(sql), params);
    return { changes: res.rowCount ?? 0 };
  }

  async insert(sql: string, params: SqlParams = []): Promise<number> {
    const res = await this.pool().query(this.toPg(sql) + " RETURNING id", params);
    return Number(res.rows[0]?.id ?? 0);
  }

  async withTx<T>(fn: (tx: TxClient) => Promise<T>): Promise<T> {
    const client = await this.pool().connect();
    try {
      await client.query("BEGIN");
      const tx: TxClient = {
        get: async (s, p = []) => (await client.query(this.toPg(s), p)).rows[0] ?? undefined,
        all: async (s, p = []) => (await client.query(this.toPg(s), p)).rows,
        run: async (s, p = []) => ({
          changes: (await client.query(this.toPg(s), p)).rowCount ?? 0,
        }),
        insert: async (s, p = []) =>
          Number((await client.query(this.toPg(s) + " RETURNING id", p)).rows[0]?.id ?? 0),
      };
      const result = await fn(tx);
      await client.query("COMMIT");
      return result;
    } catch (e) {
      await client.query("ROLLBACK").catch(() => {});
      throw e;
    } finally {
      client.release();
    }
  }
}

/* ------------------------------------------------------------------ */
/* Facade                                                              */
/* ------------------------------------------------------------------ */

function getBackend(): Backend {
  const usePg = !!process.env.DATABASE_URL;
  return usePg ? new PgBackend() : new SqliteBackend();
}

export async function ensureDb(): Promise<void> {
  await getBackend().ensure();
}

export async function get<T = unknown>(sql: string, params?: SqlParams): Promise<T | undefined> {
  const b = getBackend();
  await b.ensure();
  return (await b.get(sql, params)) as T | undefined;
}

export async function all<T = unknown>(sql: string, params?: SqlParams): Promise<T[]> {
  const b = getBackend();
  await b.ensure();
  return (await b.all(sql, params)) as T[];
}

export async function run(
  sql: string,
  params?: SqlParams
): Promise<{ changes: number }> {
  const b = getBackend();
  await b.ensure();
  return b.run(sql, params);
}

export async function insert(sql: string, params?: SqlParams): Promise<number> {
  const b = getBackend();
  await b.ensure();
  return b.insert(sql, params);
}

export async function withTx<T>(fn: (tx: TxClient) => Promise<T>): Promise<T> {
  const b = getBackend();
  await b.ensure();
  return b.withTx(fn);
}

export const db = {
  get: <T = unknown>(sql: string, params?: SqlParams) => get<T>(sql, params),
  all: <T = unknown>(sql: string, params?: SqlParams) => all<T>(sql, params),
  run: (sql: string, params?: SqlParams) => run(sql, params),
  insert: (sql: string, params?: SqlParams) => insert(sql, params),
};
