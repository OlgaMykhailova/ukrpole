import React from "react";
import { useTranslations } from "next-intl";
import CooperationItemMobTab from "./cooperationMobTab/CooperationItemMobTab";
import CooperationItemDesk from "./cooperationItemDesk/CooperationItemDesk";

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
    <ul className="flex flex-col sm:flex-row items-stretch gap-10 tab:gap-12">
      {cooperationList.map((cooperationItem, idx) => (
        <li key={idx} className="flex-1">
          <CooperationItemMobTab cooperationItem={cooperationItem} />
          <CooperationItemDesk
            cooperationItem={cooperationItem}
            position={`${idx === 0 ? "top" : "bottom"}`}
          />
        </li>
      ))}
    </ul>
  );
}
