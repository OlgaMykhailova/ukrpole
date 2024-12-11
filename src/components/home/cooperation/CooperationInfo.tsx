import React from "react";
import { useTranslations } from "next-intl";

export default function CooperationInfo() {
  const t = useTranslations("homePage.cooperation");

  return (
    <p className="max-w-[470px] tab:max-w-[780px] laptop:max-w-[900px] text-center">
      {t("description")}
    </p>
  );
}
