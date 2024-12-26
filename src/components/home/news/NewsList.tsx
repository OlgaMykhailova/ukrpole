import React from "react";
import NewsItem from "./NewsItem";
import { useLocale } from "next-intl";
import { articlesList } from "@/mockedData/articles";
import { Locale } from "@/types/locale";

export default function NewsList() {
  const locale = useLocale();

  const newsList = articlesList[locale as Locale]?.slice(0, 2);

  return (
    <ul className="tab:flex justify-between">
      {newsList.map((newsItem, idx) => (
        <NewsItem
          key={idx}
          newsItem={newsItem}
          className={`${idx > 0 ? "hidden tab:block" : ""}`}
        />
      ))}
    </ul>
  );
}
