"use client";

import TabMenu from "@/components/home/products/TabMenu";
import Section from "@/components/shared/section/Section";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { TabType } from "@/types/tab";
import { TabMenuItem } from "@/types/tabMenuItem";
import CatalogList from "./CatalogList";

export default function Catalog() {
  const [activeTab, setActiveTab] = useState<TabType>("tomatoes");
  const t = useTranslations();

  const tabs: TabMenuItem[] = [
    {
      id: "tomatoes",
      imageAlt: "tomato",
      label: t("homePage.products.tomatoes.subtitle"),
      description: t("homePage.products.tomatoes.description"),
    },
    {
      id: "cucumbers",
      imageAlt: "cucumber",
      label: t("homePage.products.cucumbers.subtitle"),
      description: t("homePage.products.cucumbers.description"),
    },
    {
      id: "assorted",
      imageAlt: "tomato and cucumber",
      label: t("homePage.products.assorted.subtitle"),
      description: t("homePage.products.assorted.description"),
    },
    {
      id: "peppers",
      imageAlt: "pepper",
      label: t("homePage.products.peppers.subtitle"),
      description: t("homePage.products.peppers.description"),
    },
  ];

  //   const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <Section>
      <h2 className="mb-6 text-18med tab:text-24med text-center">
        {t("productsPage.chooseCategory")}
      </h2>
      <TabMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <CatalogList />
    </Section>
  );
}
