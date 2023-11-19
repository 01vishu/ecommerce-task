"use client";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { RemoveFormatting, Trash2 } from "lucide-react";
import Image from "next/image";

const Cart = () => {
  const cart = useCart();
  if (cart.items.length === 0) {
    return (
      <span className="flex justify-center items-center font-semibold text-xl">
        Cart is Empty
      </span>
    );
  }
  return (
    <div className="my-4 flex flex-col gap-4">
      {cart.items.map((item) => (
        <div className="flex gap-2" key={item.id}>
          <Image
            src={item.image}
            width={500}
            height={500}
            alt={item.name}
            className="w-20 rounded-lg"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium">{item.name}</h1>
            <span className="font-bold">₹{item.price}</span>
            <Button
              className="rounded-full w-fit"
              variant={"destructive"}
              onClick={() => cart.removeItem(item.id)}
            >
              <Trash2 size={20} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      ))}
      <Button className="self-end" onClick={() => cart.removeAll()}>
        Remove All Items
      </Button>
    </div>
  );
};

export default Cart;
