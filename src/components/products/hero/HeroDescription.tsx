import React from "react";
import { useTranslations } from "next-intl";

export default function HeroDescription() {
  const t = useTranslations("productsPage");

  return (
    <p className="max-w-[400px] tab:max-w-[655px] mt-8 tab:mt-10 laptop:mt-8 mb-6 text-center">
      {t("description")}
    </p>
  );
}
