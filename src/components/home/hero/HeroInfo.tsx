"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Button from "@/components/shared/buttons/Button";
import { Link } from "@/i18n/routing";
import { useOnScreen } from "@/hooks/useOnScreen";

interface HeroInfoProps {
  sectionId: string;
}

export default function HeroInfo({ sectionId }: HeroInfoProps) {
  const t = useTranslations();
  const locale = useLocale();
  const { isVisible } = useOnScreen(sectionId);

  return (
    <div
      className={`container flex flex-col items-center laptop:justify-center h-full laptop:h-[85%] py-20 tab:py-[72px] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-1/3 opacity-0"
      } transition duration-[2000ms] ease-outBack`}
    >
      <h1 className="sm:hidden max-w-[328px] mb-8 font-alegreya text-32med text-center text-white">
        {t("homePage.hero.titleMob").toUpperCase()}
      </h1>
      <h1 className="hidden sm:block max-w-[528px] tab:max-w-[804px] laptop:max-w-[1280px] mb-12 tab:mb-8 font-alegreya text-32med tab:text-40med laptop:text-64med text-center text-white">
        {t("homePage.hero.title").toUpperCase()}
      </h1>
      <h2 className="max-w-[328px] tab:max-w-[752px] mb-[26px] sm:mb-[46px] tab:mb-[34px] text-center text-white">
        {t("homePage.hero.description")}
      </h2>
      <Link href="/about" locale={locale} className="group outline-none">
        <Button variant="secondary">{t("buttons.moreAboutUs")}</Button>
      </Link>
    </div>
  );
}
