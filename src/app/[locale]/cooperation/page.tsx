import { useTranslations } from "next-intl";
import React from "react";

import Cooperation from "@/components/cooperation/Cooperation";
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
    canonical: "/cooperation",
  });
}

export default function CooperationPage() {
  const t = useTranslations();

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.cooperation"), href: "/cooperation" },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <Cooperation />
    </>
  );
}
