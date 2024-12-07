import { TabType } from "@/types/tab";
import Image from "next/image";
import React from "react";

interface ProductItemProps {
  tabsIds: TabType[];
  label: string;
  description: string;
  activeTab: TabType;
}

export default function ProductItem({
  tabsIds,
  label,
  description,
  activeTab,
}: ProductItemProps) {
  return (
    <div>
      <div className="relative overflow-clip w-full max-w-[878px] aspect-[1756/740] mx-auto">
        {tabsIds.map((tab, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 transition duration-500 ease-out ${
              tab === activeTab
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={`/images/contentImages/homeProducts/${tab}.webp`}
              alt={label}
              width={1756}
              height={740}
              className={`w-full h-auto max-w-[878px] mx-auto laptop:hover:scale-105 transition duration-[2000ms] ease-out `}
            />
          </div>
        ))}
      </div>
      <p className="w-full max-w-[380px] tab:max-w-[746px] h-[134px] tab:h-auto mx-auto mt-4 tab:mt-6 text-center">
        {description}
      </p>
    </div>
  );
}
