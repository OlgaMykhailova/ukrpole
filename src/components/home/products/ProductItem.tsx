import { TabType } from "@/types/tab";
import { TabMenuItem } from "@/types/tabMenuItem";
import Image from "next/image";
import React from "react";

interface ProductItemProps {
  activeTabData: TabMenuItem;
}

export default function ProductItem({ activeTabData }: ProductItemProps) {
  const { id, label, description } = activeTabData;
  return (
    <div>
      <div className="overflow-clip">
        <Image
          src={`/images/contentImages/homeProducts/${id}.webp`}
          alt={label}
          width={1756}
          height={740}
          className="w-full h-auto max-w-[878px] mx-auto laptop:hover:scale-105 transition duration-[2000ms] ease-out"
        />
      </div>
      <p className="w-full max-w-[380px] tab:max-w-[746px] h-[134px] tab:h-auto mx-auto mt-4 tab:mt-6 text-center">
        {description}
      </p>
    </div>
  );
}
