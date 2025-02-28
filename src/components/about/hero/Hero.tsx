"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { useOnScreen } from "@/hooks/useOnScreen";

const SECTION_ID = "about-page-hero";

export default function Hero() {
  const t = useTranslations();
  const { isVisible } = useOnScreen(SECTION_ID);

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.about"), href: "/about" },
  ];

  return (
    <section
      id={SECTION_ID}
      className="relative flex flex-col justify-between w-full aspect-[720/320] sm:aspect-[2560/800] overflow-hidden"
    >
      <Breadcrumbs crumbs={crumbs} variant="light" />
      <Image
        src="/images/backgrounds/aboutHero/aboutHeroMob.webp"
        alt="field with tomatoes"
        width={720}
        height={320}
        priority
        className={`sm:hidden absolute -z-10 top-0 left-0 w-full h-auto ${
          isVisible
            ? "scale-100 translate-x-0 translate-y-0"
            : "scale-[115%] -translate-x-[20px] -translate-y-[18px]"
        } transition duration-[2000ms] ease-out`}
      />
      <Image
        src="/images/backgrounds/aboutHero/aboutHero.webp"
        alt="field with tomatoes"
        width={2560}
        height={800}
        priority
        className={`hidden sm:block absolute -z-10 top-0 left-0 w-full h-auto ${
          isVisible
            ? "scale-100 translate-x-0 translate-y-0"
            : "scale-[115%] sm:-translate-x-[40px] sm:-translate-y-[25px] laptop:-translate-x-[70px] laptop:-translate-y-[40px]"
        } transition duration-[2000ms] ease-out`}
      />
      <Image
        src="/images/backgrounds/aboutHero/curveFigure.svg"
        alt="curved figure"
        width="1280"
        height="70"
        priority
        className="w-full h-auto"
      />
    </section>
  );
}
