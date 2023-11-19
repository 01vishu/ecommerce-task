"use client";
import { Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface IProduct {
  data: Product;
}
const ProductCard: React.FC<IProduct> = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className="relative p-2 border border-gray-300 rounded-lg w-fit flex flex-col gap-2"
      onClick={() => router.push(`/products/${data.id}`)}
    >
      <Image
        src={data.image}
        width={800}
        height={800}
        alt={data.name}
        loading="lazy"
        className="object-cover w-60 aspect-[3/4] self-center"
      />
      <h1 className="text-base font-medium line-clamp-1 w-60">{data.name}</h1>
      <span className="font-bold">₹{data.price}</span>
      {data.isTop && (
        <span className="absolute px-2 py-1 top-3 right-3 bg-red-500 text-white rounded-lg text-xs">
          Trending
        </span>
      )}
    </div>
  );
};

export default ProductCard;
