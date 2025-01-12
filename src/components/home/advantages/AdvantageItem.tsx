import Subtitle from "@/components/shared/titles/Subtitle";
import React from "react";
import AdvantageItemImage from "./AdvantageItemImage";

interface AdvantageItemProps {
  advantage: {
    title: string;
    description: string;
    id: string;
  };
}

export default function AdvantageItem({ advantage }: AdvantageItemProps) {
  const { title, description, id } = advantage;
  const sectionId = `home-page-advantages-${id}`;

  return (
    <li
      id={sectionId}
      className="relative flex flex-col justify-center items-center w-full tab:w-[46.59%] lg:w-[328px] laptop:w-[31.85%] aspect-[1/1] 
      max-w-[368px] laptop:max-w-[460px] overflow-hidden"
    >
      <AdvantageItemImage sectionId={sectionId} />
      <Subtitle className="w-[209px] mb-2 laptop:mb-4 text-center">
        {title}
      </Subtitle>
      <p className="min-w-[276px] w-[70%] laptop:min-w-[269px] text-center">
        {description}
      </p>
    </li>
  );
}
