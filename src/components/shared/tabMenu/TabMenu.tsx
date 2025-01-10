import React, { Dispatch, SetStateAction, ReactNode } from "react";
import { TabType } from "@/types/tab";
import Image from "next/image";
import { Tabs } from "@/mockedData/tabs";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

interface TabMenuProps {
  activeTab: TabType | "all";
  setActiveTab: Dispatch<SetStateAction<TabType | "all">>;
  renderContent: (activeTab: TabType | "all") => ReactNode;
}

export default function TabMenu({
  activeTab,
  setActiveTab,
  renderContent,
}: TabMenuProps) {
  const locale = useLocale();
  const tabs = Tabs();
  const router = useRouter();
  const pathName = usePathname();

  const handleTabClick = (id: TabType) => {
    setActiveTab(id);
    if (pathName === "/products") {
      const params = new URLSearchParams(window.location.search);
      params.set("category", id);
      params.set("page", "1");
      router.push(`?${params.toString()}`, { locale, scroll: false });
    }
  };

  return (
    <div>
      <div className="flex justify-between w-[328px] tab:w-[556px] mx-auto mb-6 laptop:mb-16">
        {tabs.map(({ id, label, imageAlt }) => (
          <button
            key={id}
            onClick={() => handleTabClick(id)}
            className={`group flex flex-col items-center outline-none ${
              activeTab === id
                ? "bg-blueLight text-black"
                : "bg-transparent text-inputText"
            }`}
          >
            <Image
              src={`/images/icons/${id}.svg`}
              alt={imageAlt}
              width={80}
              height={80}
              className={`size-[64px] tab:size-20 group-active:scale-95 transition duration-300 ease-out`}
            />
            <div className="relative flex justify-center items-center w-[90px] tab:w-[128px] aspect-[162/50] group-active:scale-95 transition duration-300 ease-out">
              <Image
                src="/images/icons/strokeEllipse.svg"
                alt="stroke ellipse"
                width={162}
                height={50}
                className={`absolute top-0 left-0 w-[90px] tab:w-[128px] h-auto laptop:group-hover:opacity-100 laptop:group-focus:opacity-100 
                  transition duration-300 ease-out ${
                    activeTab === id ? "opacity-100" : "opacity-0"
                  }`}
              />
              <span
                className={`tab:text-18med transition duration-300 ease-out ${
                  activeTab === id
                    ? "text-black text-12med"
                    : "text-greenDark text-12reg"
                }`}
              >
                {label}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div>{renderContent(activeTab)}</div>
    </div>
  );
}
