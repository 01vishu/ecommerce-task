import getProduct from "@/actions/get-product";
import Info from "@/components/ui/info";
import Image from "next/image";

export const revalidate = 0;

const Product = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  return (
    <>
      <div className="py-5 flex gap-4 flex-col sm:flex-row">
        <Image
          src={product.image}
          width={800}
          height={800}
          alt={product.image}
          className="w-96 rounded-lg"
        />
        <Info data={product} />
      </div>
    </>
  );
};

export default Product;
