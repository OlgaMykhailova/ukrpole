import { useTranslations } from "next-intl";
import React from "react";

export default function CooperationInfo() {
  const t = useTranslations("cooperationPage");
  return (
    <p className="max-w-[618px] tab:max-w-[820px] laptop:max-w-[1100px] mt-10 mb-8 text-center">
      {t("description")}
    </p>
  );
}
