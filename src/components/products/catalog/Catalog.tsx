"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { TabType } from "@/types/tab";
import TabMenu from "@/components/shared/tabMenu/TabMenu";
import CatalogList from "./CatalogList";
import Section from "@/components/shared/section/Section";
import { useSearchParams, useRouter } from "next/navigation";

const SECTION_ID = "catalog";

export default function Catalog() {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = (searchParams.get("category") as TabType | "all") || "all";
  const [activeTab, setActiveTab] = useState(category);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (!params.get("category")) {
      params.set("category", "all");
    }
    if (!params.get("page")) {
      params.set("page", "1");
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

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
