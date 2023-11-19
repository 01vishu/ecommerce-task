import React from "react";
import ProductCard from "./ui/product-card";
import { Product } from "@/types";
interface IProducts {
  data: Product[];
}
const ProductList: React.FC<IProducts> = ({ data }) => {
  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      {data.map((item) => (
        <ProductCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
