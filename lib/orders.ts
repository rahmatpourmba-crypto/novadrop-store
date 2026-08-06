import { db } from "./db";

export interface OrderRow {
  id: string;
  customer_id: number;
  items: string;
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
  currency: string;
  tracking: string;
  admin_note: string;
  supplier_order_id: string;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  product_id: number;
  title: string;
  slug: string;
  price: number;
  qty: number;
  image: string;
  supplier: string;
  supplier_sku: string;
}

export interface CustomerRow {
  id: number;
  email: string;
  name: string;
  phone: string;
  country: string;
  country_code: string;
  city: string;
  address: string;
  zip: string;
  created_at: string;
}

export function getCustomer(id: number): CustomerRow | undefined {
  return db.prepare("SELECT * FROM customers WHERE id = ?").get(id) as
    | CustomerRow
    | undefined;
}

export function getOrder(id: string): (OrderRow & { customer?: CustomerRow }) | undefined {
  const order = db.prepare("SELECT * FROM orders WHERE id = ?").get(id) as
    | OrderRow
    | undefined;
  if (!order) return undefined;
  const customer = getCustomer(order.customer_id);
  return { ...order, customer };
}

export function getOrderItems(order: OrderRow): OrderItem[] {
  return JSON.parse(order.items) as OrderItem[];
}

export function getPaymentForOrder(orderId: string) {
  return db
    .prepare("SELECT * FROM payments WHERE order_id = ? ORDER BY created_at DESC LIMIT 1")
    .get(orderId) as
    | {
        id: string;
        order_id: string;
        provider: string;
        currency: string;
        amount_usd: number;
        amount_crypto: number;
        address: string;
        txid: string;
        status: string;
        external_id: string;
        created_at: string;
        updated_at: string;
      }
    | undefined;
}

export function createCustomer(input: {
  email: string;
  name: string;
  phone: string;
  country: string;
  countryCode: string;
  city: string;
  address: string;
  zip: string;
}): number {
  const existing = db
    .prepare("SELECT id FROM customers WHERE email = ?")
    .get(input.email) as { id: number } | undefined;
  if (existing) {
    db.prepare(
      `UPDATE customers SET name = ?, phone = ?, country = ?, country_code = ?, city = ?, address = ?, zip = ? WHERE id = ?`
    ).run(
      input.name,
      input.phone,
      input.country,
      input.countryCode,
      input.city,
      input.address,
      input.zip,
      existing.id
    );
    return existing.id;
  }
  const info = db
    .prepare(
      `INSERT INTO customers (email, name, phone, country, country_code, city, address, zip)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      input.email,
      input.name,
      input.phone,
      input.country,
      input.countryCode,
      input.city,
      input.address,
      input.zip
    );
  return Number(info.lastInsertRowid);
}

export function createOrder(input: {
  id: string;
  customerId: number;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  currency: string;
}): void {
  db.prepare(
    `INSERT INTO orders (id, customer_id, items, subtotal, shipping, total, status, currency)
     VALUES (?, ?, ?, ?, ?, ?, 'pending', ?)`
  ).run(
    input.id,
    input.customerId,
    JSON.stringify(input.items),
    input.subtotal,
    input.shipping,
    input.total,
    input.currency
  );
}

export function updateOrderStatus(id: string, status: string) {
  db.prepare(`UPDATE orders SET status = ?, updated_at = datetime('now') WHERE id = ?`).run(
    status,
    id
  );
}

export function setSupplierOrderId(id: string, supplierOrderId: string) {
  db.prepare(
    `UPDATE orders SET supplier_order_id = ?, updated_at = datetime('now') WHERE id = ?`
  ).run(supplierOrderId, id);
}

export function createPayment(input: {
  id: string;
  orderId: string;
  provider: string;
  currency: string;
  amountUsd: number;
  amountCrypto: number;
  address: string;
  externalId?: string;
}) {
  db.prepare(
    `INSERT INTO payments (id, order_id, provider, currency, amount_usd, amount_crypto, address, status, external_id)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?)`
  ).run(
    input.id,
    input.orderId,
    input.provider,
    input.currency,
    input.amountUsd,
    input.amountCrypto,
    input.address,
    input.externalId ?? ""
  );
}

export function markPaymentPaid(paymentId: string, txid: string) {
  db.prepare(
    `UPDATE payments SET status = 'paid', txid = ?, updated_at = datetime('now') WHERE id = ?`
  ).run(txid, paymentId);
}

export function listOrders(limit = 50): OrderRow[] {
  return db
    .prepare("SELECT * FROM orders ORDER BY created_at DESC LIMIT ?")
    .all(limit) as OrderRow[];
}

export function listCustomers(): CustomerRow[] {
  return db.prepare("SELECT * FROM customers ORDER BY created_at DESC").all() as CustomerRow[];
}

export function orderTotals() {
  const row = db
    .prepare(
      `SELECT
         COUNT(*) AS order_count,
         COALESCE(SUM(CASE WHEN status IN ('paid','processing','shipped','delivered') THEN total ELSE 0 END), 0) AS revenue,
         COALESCE(SUM(CASE WHEN status = 'pending' THEN total ELSE 0 END), 0) AS pending_revenue
       FROM orders`
    )
    .get() as { order_count: number; revenue: number; pending_revenue: number };
  return row;
}

export function recentOrders(limit = 8): OrderRow[] {
  return db
    .prepare("SELECT * FROM orders ORDER BY created_at DESC LIMIT ?")
    .all(limit) as OrderRow[];
}

export const ORDER_STATUSES = [
  { value: "pending", label: "Pending payment" },
  { value: "paid", label: "Paid" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];
