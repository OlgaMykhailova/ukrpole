import React from "react";
import { useTranslations } from "next-intl";

export default function ContactsInfo() {
  const t = useTranslations("contactsPage");

  return <p className="mb-10 laptop:mb-0">{t("description")}</p>;
}
