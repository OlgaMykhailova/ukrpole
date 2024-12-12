import React from "react";
import { useTranslations } from "next-intl";
import CooperationItemMobTab from "./CooperationItemMobTab";
import CooperationItemDesk from "./CooperationItemDesk";

export default function CooperationList() {
  const t = useTranslations("cooperationPage");

  const cooperationList = [
    {
      id: "trademark",
      title: t("trademark.title"),
      descriptionPartOne: t("trademark.description.partOne"),
      descriptionPartTwo: t("trademark.description.partTwo"),
    },
    {
      id: "distributor",
      title: t("distributor.title"),
      descriptionPartOne: t("distributor.description.partOne"),
      descriptionPartTwo: t("distributor.description.partTwo"),
    },
  ];
  return (
    <ul className="flex flex-col sm:flex-row items-start gap-10 tab:gap-12">
      {cooperationList.map((cooperationItem, idx) => (
        <>
          <CooperationItemMobTab key={idx} cooperationItem={cooperationItem} />
          <CooperationItemDesk
            key={idx}
            cooperationItem={cooperationItem}
            position={`${idx === 0 ? "top" : "bottom"}`}
          />
        </>
      ))}
    </ul>
  );
}
