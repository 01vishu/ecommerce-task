import { Product } from "@/types";
import axios from "axios";
const getTopProduct = async (): Promise<Product[]> => {
  const res = await axios.get(`${process.env.URL}/api/store/isTop`);
  return res.data;
};
export default getTopProduct;
