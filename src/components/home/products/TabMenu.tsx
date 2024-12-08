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
          className={`group flex flex-col items-center outline-none  ${
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
            className={`size-[64px] tab:size-20 group-active:scale-95 transition duration-300 ease-out`}
          />
          <div className="relative flex justify-center items-center w-[70px] tab:w-[103px] h-[33px] tab:h-[49px] group-active:scale-95 transition duration-300 ease-out">
            <Image
              src="/images/icons/strokeEllipse.svg"
              alt="stroke ellipse"
              width={103}
              height={49}
              className={`absolute top-0 left-0 w-[70px] tab:w-[103px] h-auto laptop:group-hover:opacity-100 laptop:group-focus:opacity-100 
                 transition duration-300 ease-out ${
                   activeTab === id ? "opacity-100" : "opacity-0"
                 }`}
            />
            <span
              className={`tab:text-18med ${
                activeTab === id ? "text-black" : "text-greenDark"
              }`}
            >
              {label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
