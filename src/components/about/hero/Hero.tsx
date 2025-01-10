"use client";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { useTranslations } from "next-intl";
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
      className="relative w-full aspect-[720/320] sm:aspect-[2560/800]"
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
            ? "opacity-100 scale-100 tanslate-x-0 translate-y-0"
            : " opacity-75 scale-110 translate-x-[20px] translate-y-[20px]"
        } transition duration-[2000ms] ease-out`}
      />
      <Image
        src="/images/backgrounds/aboutHero/aboutHero.webp"
        alt="field with tomatoes"
        width={2560}
        height={800}
        priority
        className={`hidden sm:block absolute -z-10 top-0 left-0 w-full h-auto ${
          isVisible ? "scale-100" : "scale-[115%]"
        } transition duration-[600ms] ease-out`}
      />
    </section>
  );
}
