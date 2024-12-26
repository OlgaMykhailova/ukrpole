import React from "react";
import { articlesList } from "@/mockedData/articles";
import { Locale } from "@/types/locale";

export default function Article({
  params,
}: {
  params: { article: string; locale: Locale };
}) {
  const { article, locale } = params;

  const currentArticle = articlesList[locale]?.find(
    (articleItem) => articleItem.id === article
  );

  return <Article article={currentArticle} />;
}
