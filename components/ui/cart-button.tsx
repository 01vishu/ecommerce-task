"use client";
import useCart from "@/hooks/use-cart";
import { Button } from "./button";
import { Store } from "lucide-react";
import { useRouter } from "next/navigation";

const CartButton = () => {
  const router = useRouter();
  const cart = useCart();

  return (
    <Button
      className="flex items-center gap-2 rounded-full"
      onClick={() => router.push("/cart")}
    >
      <Store strokeWidth={1.5} size={20} />
      <span>{cart.items.length}</span>
    </Button>
  );
};

export default CartButton;
