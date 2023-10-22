import ReviewedProduct from "@/features/user/components/ReviewedProduct";
import React from "react";
import Image from "next/image";
import product from "@/assets/apple-watch.png";

export default function Reviews() {
  return (
    <div className="p-10 h-full w-full flex flex-wrap space-between justify-center">
      <div className="h-full w-full flex flex-wrap space-between space-start">
        <ReviewedProduct
          image={product.src}
          title="Apple watch"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          price={59.99}
          rating={4}
        />
        <ReviewedProduct
          image={product.src}
          title="Apple watch"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          price={59.99}
          rating={4}
        />
        <ReviewedProduct
          image={product.src}
          title="Apple watch"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          price={59.99}
          rating={4}
        />
        
      </div>
    </div>
  );
}
