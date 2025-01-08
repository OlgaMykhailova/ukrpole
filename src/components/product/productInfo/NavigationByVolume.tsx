import { ProductItem } from "@/types/productItem";
import React from "react";
import { useLocale } from "next-intl";
import { productsList } from "@/mockedData/products";
import { Locale } from "@/types/locale";
import NavigationItem from "./NavigationItem";

interface NavigationByVolumeProps {
  currentProduct: ProductItem;
}

export default function NavigationByVolume({
  currentProduct,
}: NavigationByVolumeProps) {
  const locale = useLocale();

  const localizedProductsList = productsList[locale as Locale] as ProductItem[];

  const filteredProducts = localizedProductsList.filter(
    (product) =>
      product.category === currentProduct.category &&
      product.trademark.id === currentProduct.trademark.id
  );

  return (
    <ul
      className="flex gap-4 tab:gap-x-6 pb-4 mt-6 tab:mt-8 laptop:mt-10 overflow-x-scroll tab:overflow-x-auto scrollbar scrollbar-h-[4px] laptop:scrollbar-h-[8px] 
    scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-grey scrollbar-track-transparent tab:scrollbar-track-beige"
    >
      {filteredProducts.map((product, idx) => (
        <NavigationItem
          key={idx}
          product={product}
          currentProduct={currentProduct}
        />
      ))}
    </ul>
  );
}
