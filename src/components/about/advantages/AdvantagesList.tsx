import React from "react";
import { useTranslations } from "next-intl";
import AdvantageItem from "./AdvantageItem";

export default function AdvantagesList() {
  const t = useTranslations("aboutPage.advantages");

  const advantagesList = [
    {
      title: t("experience.title"),
      description: t("experience.description"),
      icon: "calendar",
    },
    {
      title: t("production.title"),
      description: t("production.description"),
      icon: "factory",
    },
    {
      title: t("farmers.title"),
      description: t("farmers.description"),
      icon: "leaves",
    },
    {
      title: t("clients.title"),
      description: t("clients.description"),
      icon: "handshake",
    },
  ];

  return (
    <ul className="">
      {advantagesList.map((advantage, idx) => (
        <AdvantageItem key={idx} advantage={advantage} />
      ))}
    </ul>
  );
}
