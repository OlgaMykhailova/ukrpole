import React from "react";
import { useTranslations } from "next-intl";
import AdvantageItem from "./AdvantageItem";

export default function AdvantagesList() {
  const t = useTranslations("homePage.advantages");

  const advantagesList = [
    {
      id: "quality",
      title: t("quality.title"),
      description: t("quality.description"),
    },
    {
      id: "production",
      title: t("production.title"),
      description: t("production.description"),
    },
    {
      id: "trust",
      title: t("trust.title"),
      description: t("trust.description"),
    },
  ];

  return (
    <ul className="flex flex-col items-center gap-6 tab:gap-x-12 tab:gap-y-2 tab:flex-row tab:justify-center laptop:justify-between tab:flex-wrap laptop:flex-nowrap laptop:gap-6">
      {advantagesList.map((advantage, idx) => (
        <AdvantageItem key={advantage.id} idx={idx} advantage={advantage} />
      ))}
    </ul>
  );
}
