import { useTranslations } from "next-intl";
import React from "react";

export default function CooperationInfo() {
  const t = useTranslations("homePage.cooperation");

  return (
    <p className="max-w-[470px] tab:max-w-[780px] laptop:max-w-[900px] text-center">
      {t("description")}
    </p>
  );
}
