"use client";
import React, { useState } from "react";
import NewsItem from "./NewsItem";
import { useTranslations } from "next-intl";
import Pagination from "./Pagination";

export default function NewsList() {
  const t = useTranslations();

  const newsList = [
    {
      title: t("cooperationNewsPage.title"),
      description: t("cooperationNewsPage.description"),
      id: "cooperation",
    },
    {
      title: t("growingNewsPage.title"),
      description: t("growingNewsPage.description"),
      id: "growing",
    },
    {
      title: t("trademarksNewsPage.title"),
      description: t("trademarksNewsPage.description"),
      id: "trademarks",
    },
    {
      title: t("benefitsNewsPage.title"),
      description: t("benefitsNewsPage.description"),
      id: "benefits",
    },
    {
      title: t("storageNewsPage.title"),
      description: t("storageNewsPage.description"),
      id: "storage",
    },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsList.length / itemsPerPage);

  const currentItems = newsList.slice(
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
