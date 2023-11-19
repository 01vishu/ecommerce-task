"use client";

import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";

interface InfoProp {
  data: Product;
}
const Info: React.FC<InfoProp> = ({ data }) => {
  const cart = useCart();
  const onAddToCart = () => {
    cart.addProduct(data);
  };
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg sm:text-2xl font-medium">{data.name}</h1>
      <span className="font-bold md:text-lg">₹{data.price}</span>
      {data.isTop && (
        <span className="text-green-600 text-xs sm:text-sm bg-green-200 px-2 py-1 rounded-lg w-fit">
          Best Selling Product
        </span>
      )}

      <Button onClick={onAddToCart} className="sm:w-fit my-2 rounded-full">
        Add to cart
      </Button>
    </div>
  );
};

export default Info;
