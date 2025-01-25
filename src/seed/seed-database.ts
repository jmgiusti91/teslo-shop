import { initialData } from "./seed";
import { prisma } from "../lib/prisma";

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // Cateogories
  await prisma.category.createMany({
    data: initialData.categories.map((cateogry) => ({ name: cateogry })),
  });

  const cateogries = await prisma.category.findMany();

  const categoriesMap = cateogries.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  //Products
  const productsMap = initialData.products.map(
    ({ images, type, ...product }) => ({
      ...product,
      categoryId: categoriesMap[type.toLowerCase()],
    })
  );

  await prisma.product.createMany({
    data: productsMap,
  });

  // Product Images
  const products = await prisma.product.findMany();

  const prodImages = initialData.products.map((prod) => {
    const product = products.find((p) => p.slug === prod.slug);
    if (!product) return;

    return prod.images.map((image) => ({
      productId: product.id,
      url: image,
    }));
  });

  await prisma.productImage.createMany({
    data: prodImages.flat().filter((p) => !!p),
  });

  console.log("Seed executed");
}

(async () => {
  if (process.env.NODE_ENV === "production") return;

  await main();
})();
