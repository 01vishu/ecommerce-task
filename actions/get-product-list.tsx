import { Product } from "@/types";
const getProductList = async (): Promise<Product[]> => {
  const res = await fetch(`${process.env.URL}/api/store`);
  return res.json();
};
export default getProductList;
