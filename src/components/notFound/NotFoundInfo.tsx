import { useTranslations } from "next-intl";
import React from "react";

export default function NotFoundInfo() {
  const t = useTranslations("notFoundPage");

  return (
    <p className="w-[328px] tab:w-[604px] mb-4 tab:mb-6 text-center">
      {t("description")}
    </p>
  );
}
