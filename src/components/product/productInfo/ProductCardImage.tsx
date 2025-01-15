"use client";
import Image from "next/image";
import React from "react";

import { useOnScreen } from "@/hooks/useOnScreen";
import { ProductItem } from "@/types/productItem";

import NavigationByVolume from "./navigationByVolume/NavigationByVolume";

interface ProductCardImageProps {
  currentProduct: ProductItem;
}

export default function ProductCardImage({
  currentProduct,
}: ProductCardImageProps) {
  const { title, volume, trademark, category } = currentProduct;

  const sectionId = `product-page-${trademark.id}-${category}-${volume}`;

  const { isVisible } = useOnScreen(sectionId);

  return (
    <div id={sectionId} className="laptop:w-[45.8%] mb-12 laptop:mb-0">
      <Image
        src={`/images/contentImages/products/${trademark.id}-${category}-${volume}.webp`}
        alt={title}
        width={968}
        height={1152}
        className={`w-[63.4%] tab:w-[44%] laptop:w-[73.6%] h-auto mx-auto laptop:hover:scale-105 transition duration-[2000ms] ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-90 scale-95"
        }`}
      />
      <NavigationByVolume currentProduct={currentProduct} />
    </div>
  );
}
