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
    (product) => product.category === currentProduct.category
  );

  return (
    <ul className="flex flex-wrap gap-4 tab:gap-x-6 justify-center mt-6 tab:mt-8 laptop:mt-10">
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
