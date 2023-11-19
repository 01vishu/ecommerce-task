import getTopProduct from "@/actions/get-top-product";
import ProductList from "@/components/product-list";

const imageUrl =
  "https://images.unsplash.com/photo-1615919737249-965d68c7e439?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default async function Home() {
  const topProucts = await getTopProduct();

  return (
    <main>
      <div className="py-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        >
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
              Calm Yourself By Flowers
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold text-xl text-center py-4 sm:text-2xl md:text-3xl">
          Top Products
        </p>
        <ProductList data={topProucts} />
      </div>
    </main>
  );
}
