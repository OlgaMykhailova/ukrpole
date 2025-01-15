import React from "react";

import { ArticleItem } from "@/types/article";

interface ArticleBottomProps {
  currentArticle: ArticleItem;
}

export default function ArticleBottom({ currentArticle }: ArticleBottomProps) {
  const { finalPart } = currentArticle;
  return <p className="pt-8 border-t border-greenKhaki">{finalPart}</p>;
}
