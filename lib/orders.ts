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
  supplier_cost: number | null;
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

export async function getCustomer(id: number): Promise<CustomerRow | undefined> {
  return db.get<CustomerRow>("SELECT * FROM customers WHERE id = ?", [id]);
}

export async function getOrder(
  id: string
): Promise<(OrderRow & { customer?: CustomerRow }) | undefined> {
  const order = await db.get<OrderRow>("SELECT * FROM orders WHERE id = ?", [id]);
  if (!order) return undefined;
  const customer = await getCustomer(order.customer_id);
  return { ...order, customer };
}

export function getOrderItems(order: OrderRow): OrderItem[] {
  return JSON.parse(order.items) as OrderItem[];
}

export async function getPaymentForOrder(orderId: string) {
  return db.get<{
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
  }>("SELECT * FROM payments WHERE order_id = ? ORDER BY created_at DESC LIMIT 1", [
    orderId,
  ]);
}

export async function createCustomer(input: {
  email: string;
  name: string;
  phone: string;
  country: string;
  countryCode: string;
  city: string;
  address: string;
  zip: string;
}): Promise<number> {
  const existing = await db.get<{ id: number }>(
    "SELECT id FROM customers WHERE email = ?",
    [input.email]
  );
  if (existing) {
    await db.run(
      `UPDATE customers SET name = ?, phone = ?, country = ?, country_code = ?, city = ?, address = ?, zip = ? WHERE id = ?`,
      [
        input.name,
        input.phone,
        input.country,
        input.countryCode,
        input.city,
        input.address,
        input.zip,
        existing.id,
      ]
    );
    return existing.id;
  }
  return db.insert(
    `INSERT INTO customers (email, name, phone, country, country_code, city, address, zip)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      input.email,
      input.name,
      input.phone,
      input.country,
      input.countryCode,
      input.city,
      input.address,
      input.zip,
    ]
  );
}

export async function createOrder(input: {
  id: string;
  customerId: number;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  currency: string;
}): Promise<void> {
  await db.run(
    `INSERT INTO orders (id, customer_id, items, subtotal, shipping, total, status, currency)
     VALUES (?, ?, ?, ?, ?, ?, 'pending', ?)`,
    [
      input.id,
      input.customerId,
      JSON.stringify(input.items),
      input.subtotal,
      input.shipping,
      input.total,
      input.currency,
    ]
  );
}

export async function updateOrderStatus(id: string, status: string) {
  await db.run(
    `UPDATE orders SET status = ?, updated_at = datetime('now') WHERE id = ?`,
    [status, id]
  );
}

export async function setSupplierOrderId(id: string, supplierOrderId: string) {
  await db.run(
    `UPDATE orders SET supplier_order_id = ?, updated_at = datetime('now') WHERE id = ?`,
    [supplierOrderId, id]
  );
}

export async function setSupplierCost(id: string, cost: number) {
  await db.run(
    `UPDATE orders SET supplier_cost = ?, updated_at = datetime('now') WHERE id = ?`,
    [cost, id]
  );
}

export function orderProfit(o: {
  total: number;
  supplier_cost: number | null;
}): number | null {
  return o.supplier_cost == null ? null : o.total - o.supplier_cost;
}

export async function createPayment(input: {
  id: string;
  orderId: string;
  provider: string;
  currency: string;
  amountUsd: number;
  amountCrypto: number;
  address: string;
  externalId?: string;
}) {
  await db.run(
    `INSERT INTO payments (id, order_id, provider, currency, amount_usd, amount_crypto, address, status, external_id)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?)`,
    [
      input.id,
      input.orderId,
      input.provider,
      input.currency,
      input.amountUsd,
      input.amountCrypto,
      input.address,
      input.externalId ?? "",
    ]
  );
}

export async function markPaymentPaid(paymentId: string, txid: string) {
  await db.run(
    `UPDATE payments SET status = 'paid', txid = ?, updated_at = datetime('now') WHERE id = ?`,
    [txid, paymentId]
  );
}

export async function listOrders(limit = 50): Promise<OrderRow[]> {
  return db.all<OrderRow>("SELECT * FROM orders ORDER BY created_at DESC LIMIT ?", [limit]);
}

export async function listCustomers(): Promise<CustomerRow[]> {
  return db.all<CustomerRow>("SELECT * FROM customers ORDER BY created_at DESC");
}

export async function orderTotals() {
  const row = await db.get<{
    order_count: number;
    revenue: number;
    pending_revenue: number;
  }>(
    `SELECT
       COUNT(*) AS order_count,
       COALESCE(SUM(CASE WHEN status IN ('paid','processing','shipped','delivered') THEN total ELSE 0 END), 0) AS revenue,
       COALESCE(SUM(CASE WHEN status = 'pending' THEN total ELSE 0 END), 0) AS pending_revenue
     FROM orders`
  );
  return (
    row ?? { order_count: 0, revenue: 0, pending_revenue: 0 }
  );
}

export async function recentOrders(limit = 8): Promise<OrderRow[]> {
  return db.all<OrderRow>("SELECT * FROM orders ORDER BY created_at DESC LIMIT ?", [limit]);
}

export const ORDER_STATUSES = [
  { value: "pending", label: "Pending payment" },
  { value: "paid", label: "Paid" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];
