import React from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/shared/buttons/Button";

export default function HeroInfo() {
  const t = useTranslations();

  return (
    <div className="container flex flex-col items-center laptop:justify-center h-full laptop:h-[85%] py-20 tab:py-[72px]">
      <h1 className="max-w-[328px] sm:max-w-[528px] tab:max-w-[804px] laptop:max-w-[1280px] mb-8 sm:mb-12 tab:mb-8 font-alegreya text-32med tab:text-40med laptop:text-64med text-center text-white">
        {t("homePage.hero.title").toUpperCase()}
      </h1>
      <h2 className="max-w-[328px] tab:max-w-[752px] mb-[26px] sm:mb-[46px] tab:mb-[34px] text-center text-white">
        {t("homePage.hero.description")}
      </h2>
      <Button variant="secondary">{t("buttons.moreAboutUs")}</Button>
    </div>
  );
}
