import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ValuesTitleProps {
  className?: string;
}

export default function ValuesTitle({ className = "" }: ValuesTitleProps) {
  const t = useTranslations("aboutPage.values");

  return (
    <li
      className={`group relative flex items-center justify-center w-full laptop:w-[597px] h-auto sm:h-[417px] laptop:h-auto aspect-square sm:aspect-auto 
        laptop:aspect-square mx-auto mb-10 sm:mb-0 ${className}`}
    >
      <Image
        src="/images/backgrounds/aboutValues/vegetables.webp"
        alt="vegetables"
        width={1194}
        height={1188}
        className="absolute top-0 left-0 sm:left-[calc((100%-417px)/2)] laptop:left-0 -z-10 w-full sm:w-[417px] laptop:w-[597px]"
      />
      <h2
        className="flex items-center justify-center w-[53.6%] sm:w-[225px] laptop:w-[312px] aspect-square laptop:px-4 font-alegreya text-32med 
      tab:text-40med uppercase text-center bg-yellowLight rounded-full"
      >
        {t("title")}
      </h2>
    </li>
  );
}
