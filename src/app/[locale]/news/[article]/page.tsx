"use client";
import React from "react";
import { articlesList } from "@/mockedData/articles";
import { Locale } from "@/types/locale";
import { useTranslations } from "next-intl";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Article from "@/components/article/Article";
import NotFound from "../../not-found";

interface ArticlePageProps {
  params: { article: string; locale: Locale };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const t = useTranslations();

  const { article, locale } = params;

  const currentArticle = articlesList[locale]?.find(
    (articleItem) => articleItem?.id === article
  );

  if (!currentArticle) {
    return <NotFound />;
  }

  const { title, id } = currentArticle;

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.news"), href: "/news" },
    {
      label: title || "",
      href: `/news/${id}` || "",
    },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <Article currentArticle={currentArticle} />
    </>
  );
}
