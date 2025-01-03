import React, { useState } from "react";
import { useLocale } from "next-intl";
import { productsList } from "@/mockedData/products";
import { Locale } from "@/types/locale";
import CatalogCard from "./CatalogCard";
import { ProductItem } from "@/types/productItem";
import Pagination from "@/components/shared/pagination/Pagination";

export default function CatalogList() {
  const itemsPerPage = 6;
  const locale = useLocale();
  const [currentPage, setCurrentPage] = useState(1);
  const localizedProductsList = productsList[locale as Locale] as ProductItem[];

  const totalPages = Math.ceil(localizedProductsList.length / itemsPerPage);
  const currentItems = localizedProductsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ul className="flex flex-wrap justify-between gap-y-6 tab:gap-y-10 laptop:gap-y-16 gap-x-[4.8%] tab:gap-x-[2.2%] laptop:gap-x-[2.15%]">
        {currentItems?.map((product, idx) => (
          <CatalogCard
            key={idx}
            product={product}
            className={idx === currentItems?.length - 1 ? "mr-auto" : ""}
          />
        ))}
      </ul>
      <Pagination
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
}
