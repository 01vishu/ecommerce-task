import { Product } from "@/types";
import axios from "axios";
const getProduct = async (id: string): Promise<Product> => {
  const res = await axios.get(`${process.env.URL}/api/store/${id}`);
  return res.data;
};
export default getProduct;
