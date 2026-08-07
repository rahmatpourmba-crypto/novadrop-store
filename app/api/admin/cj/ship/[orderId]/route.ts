import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { getOrder, getOrderItems, getCustomer, setSupplierOrderId, setSupplierCost, updateOrderStatus } from "@/lib/orders";
import { getSettings } from "@/lib/settings";
import { db } from "@/lib/db";
import { createOrder, freightCalculate, getCjConfig, getVariantBySku } from "@/lib/cj";

export const dynamic = "force-dynamic";

interface LineWithVid {
  vid: string;
  quantity: number;
  title: string;
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  const uid = await getSessionUserId();
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { orderId } = await params;
  const order = await getOrder(orderId);
  if (!order) return NextResponse.json({ error: "Order not found." }, { status: 404 });
  if (!order.customer) return NextResponse.json({ error: "Order has no customer." }, { status: 400 });

  try {
    const cfg = await getCjConfig();
    if (!cfg.apiKey) {
      return NextResponse.json({ error: "CJ API key is not configured in Settings." }, { status: 400 });
    }

    const items = getOrderItems(order);
    const lines: LineWithVid[] = [];

    for (const item of items) {
      const product = await db.get<{ supplier_data?: string }>(
        "SELECT supplier_data FROM products WHERE id = ?",
        [item.product_id]
      );
      let vid = "";
      let supplierData: Record<string, string> = {};
      try {
        supplierData = JSON.parse(product?.supplier_data ?? "{}") as Record<string, string>;
      } catch {
        supplierData = {};
      }
      vid = String(supplierData.vid ?? "");

      if (!vid && item.supplier_sku) {
        const found = await getVariantBySku(item.supplier_sku);
        const v = found?.variants?.find((x) => x.variantSku === item.supplier_sku);
        if (v) vid = v.vid;
      }

      if (!vid) {
        return NextResponse.json(
          { error: `No CJ variant id for "${item.title}". Re-import this product from CJ and try again.` },
          { status: 400 }
        );
      }
      lines.push({ vid, quantity: item.qty, title: item.title });
    }

    let logisticName = cfg.logisticName;
    if (!logisticName) {
      const options = await freightCalculate(
        lines.map((l) => ({ vid: l.vid, quantity: l.quantity })),
        order.customer.country_code || "US"
      );
      const sorted = [...options].sort((a, b) => a.logisticPrice - b.logisticPrice);
      const best = sorted[0];
      if (!best?.logisticName) {
        return NextResponse.json({ error: "No shipping options returned by CJ." }, { status: 502 });
      }
      logisticName = best.logisticName;
    }

    const result = await createOrder({
      orderNumber: orderId,
      shipping: {
        name: order.customer.name,
        phone: order.customer.phone,
        email: order.customer.email,
        address: order.customer.address,
        address2: "",
        city: order.customer.city,
        province: order.customer.city,
        zip: order.customer.zip,
        country: order.customer.country,
        countryCode: order.customer.country_code || "US",
      },
      lines: lines.map((l, i) => ({
        vid: l.vid,
        quantity: l.quantity,
        storeLineItemId: `${orderId}-${i + 1}`,
      })),
      logisticName,
      remark: `Store order ${orderId}`,
    });

    await setSupplierOrderId(orderId, result.orderId);
    const productCost = parseFloat(result.productAmount ?? "") || 0;
    const postageCost = parseFloat(result.postageAmount ?? "") || 0;
    if (productCost + postageCost > 0) {
      await setSupplierCost(orderId, Math.round((productCost + postageCost) * 100) / 100);
    }
    if (order.status === "paid" || order.status === "pending") {
      await updateOrderStatus(orderId, "processing");
    }

    const s = await getSettings();
    const note = [
      `CJ order ${result.orderId} created (logistics: ${logisticName})`,
      `CJ total: $${result.orderAmount ?? ""} product: $${result.productAmount ?? ""} postage: $${result.postageAmount ?? ""}`,
      `Store: ${s.store_name ?? ""}`,
    ].join("\n");
    const prev = order.admin_note ? order.admin_note + "\n\n" : "";
    await db.run("UPDATE orders SET admin_note = ? WHERE id = ?", [prev + note, orderId]);

    return NextResponse.json({ ok: true, orderId: result.orderId, logisticName, result });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "CJ ship failed." }, { status: 502 });
  }
}
