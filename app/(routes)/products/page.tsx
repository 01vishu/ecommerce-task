import getProductList from "@/actions/get-product-list";
import ProductList from "@/components/product-list";

const Products = async () => {
  const productList = await getProductList();
  return (
    <div>
      <h2 className="text-center text-xl my-4 md:text-3xl font-semibold">
        New Products
      </h2>
      <ProductList data={productList} />
    </div>
  );
};

export default Products;
