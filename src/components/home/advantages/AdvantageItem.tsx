import Subtitle from "@/components/shared/titles/Subtitle";
import React from "react";
import Image from "next/image";

interface AdvantageItemProps {
  advantage: {
    title: string;
    description: string;
  };
}

export default function AdvantageItem({ advantage }: AdvantageItemProps) {
  const { title, description } = advantage;

  return (
    <li className="group relative flex flex-col justify-center items-center w-full tab:w-[46.59%] lg:w-[328px] laptop:w-[31.85%] aspect-[1/1] max-w-[368px] laptop:max-w-[460px]">
      <Image
        src="/images/icons/strokeCircle.svg"
        alt="round outline"
        width={344}
        height={343}
        className="absolute top-0 left-0 w-full h-auto group-hover:animate-rotation"
      />

      <Subtitle className="w-[209px] mb-2 laptop:mb-4 text-center">
        {title}
      </Subtitle>
      <p className="min-w-[276px] w-[70%] laptop:min-w-[269px] text-center">
        {description}
      </p>
    </li>
  );
}
