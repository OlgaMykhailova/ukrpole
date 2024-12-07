import React, { Dispatch, SetStateAction } from "react";

import { TabType } from "@/types/tab";
import { TabMenuItem } from "@/types/tabMenuItem";
import Image from "next/image";

interface TabMenuProps {
  tabs: TabMenuItem[];
  setActiveTab: Dispatch<SetStateAction<TabType>>;
  activeTab: TabType;
}

export default function TabMenu({
  tabs,
  setActiveTab,
  activeTab,
}: TabMenuProps) {
  return (
    <div className="flex justify-between w-[328px] tab:w-[556px] mx-auto mb-12 laptop:mb-8">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`transition duration-300 ease-out
            outline-none ${
              activeTab === id
                ? "bg-blueLight text-black"
                : "bg-transparent text-inputText"
            }`}
        >
          <Image
            src={`/images/icons/${id}.svg`}
            alt={label}
            width={80}
            height={80}
            className="size-[64px] tab:size-20"
          />
          <span className="text-greenDark">{label}</span>
        </button>
      ))}
    </div>
  );
}
