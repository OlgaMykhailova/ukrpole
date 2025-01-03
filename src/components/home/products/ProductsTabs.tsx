"use client";

import React, { useState } from "react";
import { TabType } from "@/types/tab";
import TabMenu from "../../shared/tabMenu/TabMenu";
import ProductItem from "./ProductItem";
import { Tabs } from "@/mockedData/tabs";

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("tomatoes");

  const tabs = Tabs();

  return (
    <div>
      <TabMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        renderContent={(activeTab) => {
          const activeTabData = tabs.find((tab) => tab.id === activeTab);
          return activeTabData ? (
            <ProductItem activeTabData={activeTabData} />
          ) : null;
        }}
      />
    </div>
  );
}
