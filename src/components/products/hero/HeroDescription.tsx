import { useTranslations } from "next-intl";
import React from "react";

export default function HeroDescription() {
  const t = useTranslations("productsPage");

  return (
    <h1 className="max-w-[400px] tab:max-w-[655px] mt-8 tab:mt-10 laptop:mt-8 mb-6 text-center">
      {t("description")}
    </h1>
  );
}
