import { useTranslations } from "next-intl";
import React from "react";

export default function CooperationTitle() {
  const t = useTranslations();

  return (
    <h2 className="mb-6 tab:mb-5 font-alegreya text-32med tab:text-40med uppercase text-center">
      {t("homePage.cooperation.title")}
    </h2>
  );
}
