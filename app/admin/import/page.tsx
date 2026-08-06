import { listCategories } from "@/lib/products";
import ImportClient from "./ImportClient";

export const dynamic = "force-dynamic";

export default async function ImportPage() {
  const categories = await listCategories();
  return <ImportClient categories={categories.map((c) => ({ id: c.id, name: c.name }))} />;
}
