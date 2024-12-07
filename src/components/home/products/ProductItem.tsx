import { TabType } from "@/types/tab";
import Image from "next/image";
import React from "react";

interface ProductItemProps {
  id: TabType;
  label: string;
  description: string;
}

export default function ProductItem({
  id,
  label,
  description,
}: ProductItemProps) {
  return (
    <div>
      <Image
        src={`/images/contentImages/homeProducts/${id}.webp`}
        alt={label}
        width={1756}
        height={740}
        className="w-full h-auto max-w-[878px] mx-auto"
      />
      <p className="w-full max-w-[380px] tab:max-w-[746px] h-[134px] tab:h-auto mx-auto mt-4 tab:mt-6 text-center">
        {description}
      </p>
    </div>
  );
}
