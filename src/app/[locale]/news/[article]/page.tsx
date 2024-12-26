import React from "react";
import { articlesList } from "@/mockedData/articles";
import { Locale } from "@/types/locale";
import { useTranslations } from "next-intl";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";

export default function Article({
  params,
}: {
  params: { article: string; locale: Locale };
}) {
  const t = useTranslations();

  const { article, locale } = params;

  const currentArticle = articlesList[locale]?.find(
    (articleItem) => articleItem.id === article
  );

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.news"), href: "/news" },
    {
      label: currentArticle?.title || "",
      href: `/news/${currentArticle?.id}` || "",
    },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      {/* <Article article={currentArticle} />{" "} */}
    </>
  );
}
