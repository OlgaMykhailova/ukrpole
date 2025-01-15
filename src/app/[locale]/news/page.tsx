import { useTranslations } from "next-intl";
import React from "react";

import News from "@/components/news/News";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";

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
