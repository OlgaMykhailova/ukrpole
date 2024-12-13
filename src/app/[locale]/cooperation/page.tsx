import React from "react";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Cooperation from "@/components/cooperation/Cooperation";
import { useTranslations } from "next-intl";

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
