import { listCategories } from "@/lib/products";
import ImportClient from "./ImportClient";

export const dynamic = "force-dynamic";

export default function ImportPage() {
  const categories = listCategories();
  return <ImportClient categories={categories.map((c) => ({ id: c.id, name: c.name }))} />;
}
