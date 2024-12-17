import React from "react";
import { useTranslations } from "next-intl";

export default function NotFoundTitle() {
  const t = useTranslations("notFoundPage");

  return (
    <h1 className="w-[288px] tab:w-[604px] mb-6 tab:mb-8 font-alegreya text-24med tab:text-32med uppercase text-center">
      {t("title")}
    </h1>
  );
}
