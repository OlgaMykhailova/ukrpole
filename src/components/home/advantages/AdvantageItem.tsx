import Subtitle from "@/components/shared/titles/Subtitle";
import React from "react";

interface AdvantageItemProps {
  advantage: {
    title: string;
    description: string;
  };
}

export default function AdvantageItem({ advantage }: AdvantageItemProps) {
  const { title, description } = advantage;

  return (
    <li className="px-[25px] py-[83px] laptop:px-7 laptop:py-[69px]">
      <Subtitle className="mb-2 laptop:mb-4 text-center">{title}</Subtitle>
      <p className="text-center">{description}</p>
    </li>
  );
}
