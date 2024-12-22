import React from "react";
import NewsItem from "./NewsItem";
import { useTranslations } from "next-intl";

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
  ];

  return (
    <ul className="flex flex-col gap-y-10 justify-between">
      {newsList.map((newsItem, idx) => (
        <NewsItem key={idx} newsItem={newsItem} />
      ))}
    </ul>
  );
}
