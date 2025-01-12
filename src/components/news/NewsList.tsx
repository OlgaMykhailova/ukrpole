"use client";

import React from "react";
import NewsItem from "./NewsItem";
import Pagination from "../shared/pagination/Pagination";
import { articlesList } from "@/mockedData/articles";
import { useLocale } from "next-intl";
import { Locale } from "@/types/locale";

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
