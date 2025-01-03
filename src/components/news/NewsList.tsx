"use client";
import React, { useState } from "react";
import NewsItem from "./NewsItem";
import Pagination from "../shared/pagination/Pagination";
import { articlesList } from "@/mockedData/articles";
import { useLocale } from "next-intl";
import { Locale } from "@/types/locale";

export default function NewsList() {
  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const locale = useLocale();

  const localizedNewsList = articlesList[locale as Locale];
  const totalPages = Math.ceil(localizedNewsList.length / itemsPerPage);
  const currentItems = localizedNewsList.slice(
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
      <ul className="flex flex-col gap-y-10 justify-between">
        {currentItems.map((newsItem, idx) => (
          <NewsItem key={idx} newsItem={newsItem} />
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
