import { ArticleItem } from "@/types/article";
import React from "react";

interface ArticleBottomProps {
  currentArticle: ArticleItem;
}

export default function ArticleBottom({ currentArticle }: ArticleBottomProps) {
  const { finalPart } = currentArticle;
  return <p className="pt-8 border-t border-greenKhaki">{finalPart}</p>;
}
