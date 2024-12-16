import React from "react";
import { useTranslations } from "next-intl";

export default function ContactsInfo() {
  const t = useTranslations("contactsPage");

  return (
    <p className="lg:order-1 lg:w-[45.9%] laptop:w-[48.9%] mb-10 lg:mb-0">
      {t("description")}
    </p>
  );
}
