import Image from "next/image";
import React from "react";

interface PartnerItemProps {
  partner: string;
}

export default function PartnerItem({ partner }: PartnerItemProps) {
  return (
    <li className="flex items-center justify-center sm:w-[30.9%] lg:w-[23%] laptop:w-[23.3%] h-auto aspect-[155/66] px-3 tab:px-4 laptop:px-5 rounded-[16px] bg-beige">
      <Image
        src={`/images/contentImages/homePartners/${partner}.webp`}
        alt={partner}
        width={428}
        height={194}
      />
    </li>
  );
}
