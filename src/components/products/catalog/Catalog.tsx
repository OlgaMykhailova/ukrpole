"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { TabType } from "@/types/tab";
import TabMenu from "@/components/shared/tabMenu/TabMenu";
import CatalogList from "./CatalogList";
import Section from "@/components/shared/section/Section";

const SECTION_ID = "catalog";

export default function Catalog() {
  const [activeTab, setActiveTab] = useState<TabType | "all">("tomatoes");
  const t = useTranslations();

  return (
    <Section id={SECTION_ID}>
      <h2 className="mb-6 text-18med tab:text-24med text-center">
        {t("productsPage.chooseCategory")}
      </h2>
      <TabMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        renderContent={(activeTab) => (
          <CatalogList
            id={SECTION_ID}
            filterBy={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      />
    </Section>
  );
}
