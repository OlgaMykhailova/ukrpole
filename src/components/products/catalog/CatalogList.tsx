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
    <ul className="flex flex-wrap justify-between gap-y-6 tab:gap-y-10 laptop:gap-y-16 gap-x-[4.8%] tab:gap-x-[2.2%] laptop:gap-x-[2.15%]">
      {localizedProductsList.map((product, idx) => (
        <CatalogCard
          key={idx}
          product={product}
          className={idx === localizedProductsList.length - 1 ? "mr-auto" : ""}
        />
      ))}
    </ul>
  );
}
