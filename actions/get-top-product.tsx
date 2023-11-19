import prismadb from "@/lib/db";
import { Product } from "@/types";
const getTopProduct = async (): Promise<Product[] | null> => {
  const topProduct = await prismadb.product.findMany({
    where: {
      isTop: true,
    },
  });
  return topProduct;
};
export default getTopProduct;
