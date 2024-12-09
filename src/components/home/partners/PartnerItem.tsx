import Image from "next/image";
import React from "react";

interface PartnerItemProps {
  partner: string;
}

export default function PartnerItem({ partner }: PartnerItemProps) {
  return (
    <li className="w-[155px] h-[66px] tab:w-[218px] tab:h-[92px] laptop:w-[252px] laptop:h-[109px] px-3 tab:px-4 laptop:px-5 rounded-[16px] bg-beige">
      <Image
        src={`/images/contentImages/homePartners/${partner}.webp`}
        alt={partner}
        width={428}
        height={194}
      />
    </li>
  );
}
