import React from "react";
import { ProductItem } from "@/types/productItem";
import ProductBgImages from "./ProductBgImages";
import Image from "next/image";
import NavigationByVolume from "./NavigationByVolume";
import ProductCardInfo from "./productCardInfo/ProductCardInfo";

interface ProductInfoProps {
  currentProduct: ProductItem;
}

export default function ProductCard({ currentProduct }: ProductInfoProps) {
  const { title, volume, trademark, category } = currentProduct;

  return (
    <div className="relative aspect-[360/171] tab:aspect-[768/209] laptop:aspect-[1280/261]">
      <ProductBgImages />
      <section className="container laptop:flex justify-between max-w-[1920px] pb-20 tab:pb-[100px] scroll-mt-[92px]">
        <div className="laptop:w-[46.8%] mb-12 laptop:mb-0">
          <Image
            src={`/images/contentImages/products/${trademark.id}-${category}-${volume}.webp`}
            alt={title}
            width={968}
            height={1152}
            className="w-[63.4%] tab:w-[44%] laptop:w-[73.6%] h-auto mx-auto laptop:group-hover:scale-105 transition duration-[2000ms] ease-out"
          />
          <NavigationByVolume currentProduct={currentProduct} />
        </div>
        <ProductCardInfo currentProduct={currentProduct} />
      </section>
    </div>
  );
}
