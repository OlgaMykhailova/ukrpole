import { useTranslations } from "next-intl";
import React from "react";

import Contacts from "@/components/contacts/Contacts";
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
    canonical: "/contacts",
  });
}

export default function ContactPage() {
  const t = useTranslations();

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.contacts"), href: "/contacts" },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <Contacts />
    </>
  );
}
