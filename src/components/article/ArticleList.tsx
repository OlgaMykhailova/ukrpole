import React from "react";

import { ArticleItem } from "@/types/article";

import ArticleListItem from "./ArticleItem";

interface ArticleListProps {
  currentArticle: ArticleItem;
}

export default function ArticleList({ currentArticle }: ArticleListProps) {
  const { list } = currentArticle;

  return (
    <ul className="flex flex-col sm:flex-row sm:flex-wrap tab:justify-between gap-y-8 pt-8 laptop:pt-[60px] pb-8">
      {list.map((listItem, idx) => (
        <ArticleListItem key={idx} listItem={listItem} />
      ))}
    </ul>
  );
}
