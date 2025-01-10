import React, { Dispatch, SetStateAction } from "react";
import { useLocale, useTranslations } from "next-intl";
import { productsList } from "@/mockedData/products";
import { Locale } from "@/types/locale";
import CatalogCard from "../../shared/catalogCard/CatalogCard";
import { ProductItem } from "@/types/productItem";
import Pagination from "@/components/shared/pagination/Pagination";
import ProductsCounter from "./ProductsCounter";
import { TabType } from "@/types/tab";
import Image from "next/image";
import { useRouter } from "@/i18n/routing";

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
  const router = useRouter();
  const t = useTranslations("buttons");
  const localizedProductsList = productsList[locale as Locale] as ProductItem[];

  const filteredProducts =
    filterBy === "all"
      ? localizedProductsList
      : localizedProductsList.filter(({ category }) => category === filterBy);

  const handleClick = () => {
    setActiveTab("all");
    const params = new URLSearchParams(window.location.search);
    params.set("category", "all");
    params.set("page", "1");
    router.push(`?${params.toString()}`, { locale, scroll: false });
  };

  return (
    <>
      <div className="flex flex-col gap-y-20 tab:flex-row-reverse tab:gap-y-0 tab:justify-between tab:items-center mb-6 tab:mb-8">
        <button
          onClick={handleClick}
          className={`group flex flex-col items-center outline-none ${
            filterBy === "all"
              ? "bg-blueLight text-black"
              : "bg-transparent text-inputText"
          }`}
        >
          <div className="relative flex justify-center items-center w-[152px] tab:w-[192px] aspect-[162/50] group-active:scale-95 transition duration-300 ease-out">
            <Image
              src="/images/icons/strokeEllipse.svg"
              alt="stroke ellipse"
              width={162}
              height={50}
              className={`absolute top-0 left-0 w-full h-auto laptop:group-hover:opacity-100 laptop:group-focus:opacity-100 
                          transition duration-300 ease-out ${
                            filterBy === "all" ? "opacity-100" : "opacity-0"
                          }`}
            />
            <span
              className={`tab:text-18med transition duration-300 ease-out ${
                filterBy === "all"
                  ? "text-black text-14med"
                  : "text-greenDark text-14reg"
              }`}
            >
              {t("seeAll")}
            </span>
          </div>
        </button>

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
                className={`${
                  idx === currentItems.length - 1 ? "mr-auto" : ""
                }  w-[47.6%] tab:w-[48.9%] laptop:w-[31.9%]`}
              />
            ))}
          </ul>
        )}
      />
    </>
  );
}
