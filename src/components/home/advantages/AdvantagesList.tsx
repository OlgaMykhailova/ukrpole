import React from "react";
import { useTranslations } from "next-intl";
import AdvantageItem from "./AdvantageItem";

export default function AdvantagesList() {
  const t = useTranslations("homePage.advantages");

  const advantagesList = [
    {
      title: t("quality.title"),
      description: t("quality.description"),
    },
    {
      title: t("production.title"),
      description: t("production.description"),
    },
    {
      title: t("trust.title"),
      description: t("trust.description"),
    },
  ];

  return (
    <ul className="flex flex-col items-center gap-6 tab:gap-x-12 tab:gap-y-2 tab:flex-row tab:justify-center laptop:justify-between tab:flex-wrap laptop:flex-nowrap laptop:gap-6">
      {advantagesList.map((advantage, idx) => (
        <AdvantageItem key={idx} advantage={advantage} />
      ))}
    </ul>
  );
}
