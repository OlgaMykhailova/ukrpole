import React from "react";
import { useLocale } from "next-intl";
import { productsList } from "@/mockedData/products";
import { Locale } from "@/types/locale";
import CatalogCard from "./CatalogCard";
import { ProductItem } from "@/types/productItem";
import Pagination from "@/components/shared/pagination/Pagination";

interface CatalogListProps {
  id?: string;
  filterBy: string;
}

export default function CatalogList({ id = "", filterBy }: CatalogListProps) {
  const itemsPerPage = 6;
  const locale = useLocale();
  const localizedProductsList = productsList[locale as Locale] as ProductItem[];

  const filteredProducts = localizedProductsList.filter(
    (product) => product.id === filterBy
  );

  return (
    <Pagination
      items={filteredProducts}
      itemsPerPage={itemsPerPage}
      scrollTargetId={id}
      renderItems={(currentItems) => (
        <ul className="flex flex-wrap justify-between gap-y-6 tab:gap-y-10 laptop:gap-y-16 gap-x-[4.8%] tab:gap-x-[2.2%] laptop:gap-x-[2.15%]">
          {currentItems.map((product, idx) => (
            <CatalogCard
              key={idx}
              product={product}
              className={idx === currentItems.length - 1 ? "mr-auto" : ""}
            />
          ))}
        </ul>
      )}
    />
  );
}
