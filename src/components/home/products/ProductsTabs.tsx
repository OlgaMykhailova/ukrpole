"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { TabType } from "@/types/tab";
import { TabMenuItem } from "@/types/tabMenuItem";
import TabMenu from "./TabMenu";
import ProductItem from "./ProductItem";

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("tomatoes");
  const t = useTranslations("homePage.products");

  const tabs: TabMenuItem[] = [
    {
      id: "tomatoes",
      imageAlt: "tomato",
      label: t("tomatoes.subtitle"),
      description: t("tomatoes.description"),
    },
    {
      id: "cucumbers",
      imageAlt: "cucumber",
      label: t("cucumbers.subtitle"),
      description: t("cucumbers.description"),
    },
    {
      id: "assorted",
      imageAlt: "tomato and cucumber",
      label: t("assorted.subtitle"),
      description: t("assorted.description"),
    },
    {
      id: "peppers",
      imageAlt: "pepper",
      label: t("peppers.subtitle"),
      description: t("peppers.description"),
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <TabMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mx-auto">
        {activeTabData && <ProductItem activeTabData={activeTabData} />}
      </div>
    </div>
  );
}
