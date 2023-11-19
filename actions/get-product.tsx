import prismadb from "@/lib/db";
import { Product } from "@/types";

const getProduct = async (id: string): Promise<Product> => {
  const product = await prismadb.product.findFirst({
    where: {
      id,
    },
  });
  return product!;
};
export default getProduct;
