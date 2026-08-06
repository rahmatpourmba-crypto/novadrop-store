import { listCategories } from "@/lib/products";
import CjClient from "./CjClient";

export const dynamic = "force-dynamic";

export default async function CjImportPage() {
  const categories = await listCategories();
  return <CjClient categories={categories.map((c) => ({ id: c.id, name: c.name }))} />;
}
