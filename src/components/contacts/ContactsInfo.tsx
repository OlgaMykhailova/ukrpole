import React from "react";
import { useTranslations } from "next-intl";

export default function ContactsInfo() {
  const t = useTranslations("contactsPage");

  return <p>{t("description")}</p>;
}
