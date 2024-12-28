import React from "react";
import { useLocale } from "next-intl";
import { productsList } from "@/mockedData/products";
import { Locale } from "@/types/locale";
import CatalogCard from "./CatalogCard";
import { ProductItem } from "@/types/productItem";

export default function CatalogList() {
  const locale = useLocale();

  const localizedProductsList = productsList[locale as Locale] as ProductItem[];

  return (
    <ul className="flex flex-wrap justify-between gap-y-6">
      {localizedProductsList.map((product, idx) => (
        <CatalogCard key={idx} product={product} />
      ))}
    </ul>
  );
}
