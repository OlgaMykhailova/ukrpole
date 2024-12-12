import Subtitle from "@/components/shared/titles/Subtitle";
import Image from "next/image";
import React from "react";

interface AdvantageItemProps {
  advantage: { title: string; description: string; icon: string };
}

export default function AdvantageItem({ advantage }: AdvantageItemProps) {
  const { title, description, icon } = advantage;

  return (
    <li className="w-full sm:w-[46.3%] laptop:w-[47.2%] laptop:flex items-center gap-4">
      <Image
        src={`/images/icons/${icon}.svg`}
        alt={icon}
        width="102"
        height="102"
        className="hidden laptop:block laptop:size-[102px]"
      />
      <div>
        <div className="flex items-center gap-x-4 mb-3">
          <Image
            src={`/images/icons/${icon}.svg`}
            alt={icon}
            width="102"
            height="102"
            className="laptop:hidden size-20 laptop:size-[102px]"
          />
          <Subtitle className="max-w-[230px] laptop:max-w-full">
            {title}
          </Subtitle>
        </div>
        <p>{description}</p>
      </div>
    </li>
  );
}
