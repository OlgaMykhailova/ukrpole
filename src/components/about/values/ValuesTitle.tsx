"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useOnScreen } from "@/hooks/useOnScreen";

interface ValuesTitleProps {
  className?: string;
}

const SECTION_ID = "values-section-title";

export default function ValuesTitle({ className = "" }: ValuesTitleProps) {
  const t = useTranslations("aboutPage.values");
  const { isVisible } = useOnScreen(SECTION_ID);

  return (
    <li
      id={SECTION_ID}
      className={`group relative flex items-center justify-center w-full laptop:w-[597px] h-auto sm:h-[417px] laptop:h-auto aspect-square sm:aspect-auto 
        laptop:aspect-square mx-auto mb-10 sm:mb-0 ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden -z-10">
        <Image
          src="/images/backgrounds/aboutValues/vegetables.webp"
          alt="vegetables"
          width={1194}
          height={1188}
          className={` ${
            isVisible
              ? "w-full sm:w-[417px] laptop:w-[597px] opacity-100"
              : "w-[53.6%] sm:w-[225px] laptop:w-[312px] opacity-0"
          } h-auto transition-[width, opacity] duration-[1000ms] ease-out`}
        />
      </div>
      <h2
        className="flex items-center justify-center w-[53.6%] sm:w-[225px] laptop:w-[312px] aspect-square laptop:px-4 font-alegreya text-32med 
      tab:text-40med uppercase text-center bg-yellowLight rounded-full"
      >
        {t("title")}
      </h2>
    </li>
  );
}
