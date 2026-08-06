import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { getProductById, imagesOf, listCategories } from "@/lib/products";
import ProductForm from "../../../components/ProductForm";

export const dynamic = "force-dynamic";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(Number(id));
  if (!product) notFound();

  const categories = await listCategories();

  return (
    <div>
      <h1 className="text-2xl font-bold">Edit product</h1>
      <p className="mt-1 text-sm text-gray-500">{product.title}</p>
      <ProductForm
        categories={categories.map((c) => ({ id: c.id, name: c.name }))}
        initial={{
          id: product.id,
          slug: product.slug,
          title: product.title,
          description: product.description,
          price: String(product.price),
          compare_at: product.compare_at ? String(product.compare_at) : "",
          category_id: product.category_id ? String(product.category_id) : "",
          images: imagesOf(product),
          stock: String(product.stock),
          supplier: product.supplier,
          supplier_sku: product.supplier_sku,
          is_active: !!product.is_active,
          featured: !!product.featured,
        }}
      />
    </div>
  );
}
