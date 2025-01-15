"use client";

import { useSearchParams } from "next/navigation";
import { useLocale,useTranslations } from "next-intl";
import React, { useEffect,useState } from "react";

import Section from "@/components/shared/section/Section";
import TabMenu from "@/components/shared/tabMenu/TabMenu";
import { useRouter } from "@/i18n/routing";
import { TabType } from "@/types/tab";

import CatalogList from "./CatalogList";

const SECTION_ID = "catalog";

export default function Catalog() {
  const t = useTranslations();
  const locale = useLocale();
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
    router.replace(`?${params.toString()}`, { locale, scroll: false });
  }, [router, searchParams, locale]);

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
