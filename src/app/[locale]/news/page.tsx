import React from "react";
import { useTranslations } from "next-intl";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import News from "@/components/news/News";

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
