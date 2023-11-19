import prismadb from "@/lib/db";
import { Product } from "@/types";
const getProductList = async (): Promise<Product[]> => {
  const products = await prismadb.product.findMany();
  return products;
};
export default getProductList;
