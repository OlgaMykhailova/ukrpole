import { useTranslations } from "next-intl";
import React from "react";

import Cooperation from "@/components/cooperation/Cooperation";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";

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
