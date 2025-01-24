import { useTranslations } from "next-intl";
import React from "react";

import News from "@/components/news/News";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { Locale } from "@/types/locale";
import { generatePageMetaData } from "@/utils/generatePageMetaData";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return generatePageMetaData({
    locale,
    namespace: "metadata",
    canonical: "/news",
  });
}

export default function NewsPage() {
  const t = useTranslations();

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.news"), href: "/news" },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <News />
    </>
  );
}
