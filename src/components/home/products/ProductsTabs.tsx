"use client";

import React, { useState } from "react";

import { Tabs } from "@/mockedData/tabs";
import { TabType } from "@/types/tab";

import TabMenu from "../../shared/tabMenu/TabMenu";
import ProductItem from "./ProductItem";

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState<TabType | "all">("tomatoes");

  const tabs = Tabs();

  return (
    <div>
      <TabMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        renderContent={(activeTab) => {
          const activeTabData = tabs.find((tab) => tab.id === activeTab);
          return activeTabData ? (
            <ProductItem key={activeTabData.id} activeTabData={activeTabData} />
          ) : null;
        }}
      />
    </div>
  );
}
