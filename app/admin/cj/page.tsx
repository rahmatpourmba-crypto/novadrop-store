import { listCategories } from "@/lib/products";
import CjClient from "./CjClient";

export const dynamic = "force-dynamic";

export default function CjImportPage() {
  const categories = listCategories();
  return <CjClient categories={categories.map((c) => ({ id: c.id, name: c.name }))} />;
}
