"use client";

import { useLocale } from "next-intl";
import React from "react";

import { articlesList } from "@/mockedData/articles";
import { Locale } from "@/types/locale";

import Pagination from "../shared/pagination/Pagination";
import NewsItem from "./NewsItem";

interface NewsListProps {
  id?: string;
}

export default function NewsList({ id = "" }: NewsListProps) {
  const itemsPerPage = 4;
  const locale = useLocale();
  const localizedNewsList = articlesList[locale as Locale];

  return (
    <Pagination
      items={localizedNewsList}
      itemsPerPage={itemsPerPage}
      scrollTargetId={id}
      renderItems={(currentItems) => (
        <ul className="flex flex-col gap-y-10 justify-between">
          {currentItems.map((newsItem) => (
            <NewsItem key={newsItem.id} newsItem={newsItem} />
          ))}
        </ul>
      )}
    />
  );
}
