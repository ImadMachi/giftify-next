import Image from "next/image";
import Stars from "./ui/Stars";
import Button from "./ui/Button";
import { Product } from "@/app/types/apps/Product";
import AppleWatchImage from "@/assets/apple-watch.png";

interface ProductsCardProps {
  products: Array<Product> | null;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products &&
        products.map((product, index) => (
          <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg">
            <div className="p-10 rounded-t-lg">
              <a href="#">
                <Image
                  src={AppleWatchImage}
                  alt="product image"
                  width={300}
                  height={300}
                  style={{ padding: "20px" }}
                />
              </a>
            </div>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  {product.name}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <Stars children={undefined} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <Button className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductsCard;
