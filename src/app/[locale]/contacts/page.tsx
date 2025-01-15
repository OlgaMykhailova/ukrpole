import { useTranslations } from "next-intl";
import React from "react";

import Contacts from "@/components/contacts/Contacts";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";

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
