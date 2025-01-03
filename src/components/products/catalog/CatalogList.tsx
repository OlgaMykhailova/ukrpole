import React, { Dispatch, SetStateAction } from "react";
import { useLocale, useTranslations } from "next-intl";
import { productsList } from "@/mockedData/products";
import { Locale } from "@/types/locale";
import CatalogCard from "./CatalogCard";
import { ProductItem } from "@/types/productItem";
import Pagination from "@/components/shared/pagination/Pagination";
import ProductsCounter from "./ProductsCounter";
import { TabType } from "@/types/tab";
import TextButton from "@/components/shared/buttons/TextButton";

interface CatalogListProps {
  id: string;
  filterBy: TabType | "all";
  setActiveTab: Dispatch<SetStateAction<TabType | "all">>;
}

export default function CatalogList({
  id,
  filterBy,
  setActiveTab,
}: CatalogListProps) {
  const itemsPerPage = 6;
  const locale = useLocale();
  const t = useTranslations("buttons");
  const localizedProductsList = productsList[locale as Locale] as ProductItem[];

  const filteredProducts =
    filterBy === "all"
      ? localizedProductsList
      : localizedProductsList.filter((product) => product.id === filterBy);

  return (
    <>
      <div className="flex flex-col gap-y-20 tab:flex-row-reverse tab:gap-y-0 tab:justify-between tab:items-center mb-6 tab:mb-8">
        <TextButton onClick={() => setActiveTab("all")}>
          {t("seeAll")}
        </TextButton>
        <ProductsCounter
          filterBy={filterBy}
          filteredProducts={filteredProducts}
        />
      </div>

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
    </>
  );
}
