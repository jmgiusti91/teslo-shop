import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const allowedCategories = ["men", "women", "kid"];
const labels: Record<Category, string> = {
  men: "Men",
  women: "Women",
  kid: "Kids",
  unisex: "All",
};

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const products = seedProducts.filter((product) => product.gender === id);

  if (!allowedCategories.includes(id.toLowerCase())) {
    notFound(); // notFound returns a never so it's not necessary to return anything
  }

  return (
    <>
      <Title
        title={`Category ${labels[id]}`}
        subtitle={`For ${labels[id]}`}
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
