import React from "react";
import { useTranslations } from "next-intl";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Contacts from "@/components/contacts/Contacts";

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
