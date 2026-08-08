import { listCategories } from "@/lib/products";
import ProductForm from "../../components/ProductForm";

export const dynamic = "force-dynamic";

export default async function NewProductPage() {
  const categories = await listCategories();
  return (
    <div>
      <h1 className="text-2xl font-bold">Add product</h1>
      <p className="mt-1 text-sm text-gray-500">Create a new dropshipping product</p>
      <ProductForm categories={categories.map((c) => ({ id: c.id, name: c.name }))} />
    </div>
  );
}
