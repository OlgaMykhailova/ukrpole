import { useTranslations } from "next-intl";
import React from "react";

import ValueItem from "./ValueItem";
import ValuesTitle from "./ValuesTitle";

export default function ValuesList() {
  const t = useTranslations("aboutPage.values");

  const valuesList = [
    {
      title: t("naturalness.title"),
      description: t("naturalness.description"),
    },
    {
      title: t("innovations.title"),
      description: t("innovations.description"),
    },
    {
      title: t("ecology.title"),
      description: t("ecology.description"),
    },
    {
      title: t("partnership.title"),
      description: t("partnership.description"),
    },
  ];

  return (
    <ul className="sm:flex flex-wrap laptop:flex-col laptop:justify-center laptop:items-baseline laptop:gap-y-[100px] w-full laptop:h-[597px]">
      <ValuesTitle className="sm:order-3 sm:flex-grow-1" />
      {valuesList.map((value, idx) => (
        <ValueItem
          key={idx}
          value={value}
          className={`
            ${idx === 0 ? "sm:order-0" : ""}
            ${idx === 1 ? "sm:order-2" : ""}
            ${idx === 2 ? "sm:order-3" : ""}
            ${idx === 3 ? "sm:order-4" : ""}
          `}
        />
      ))}
    </ul>
  );
}
