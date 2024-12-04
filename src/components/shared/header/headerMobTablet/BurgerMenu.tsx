import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Locale } from "@/types/locale";
import LocaleSwitcher from "../LocaleSwitcher";
import BurgerMenuBgImages from "./BurgerMenuBgImages";
import NavMenu from "../navMenu/NavMenu";
import Button from "../../buttons/Button";

interface BurgerMenuMobTabProps {
  isHeaderMenuOpened: boolean;
}

export default function BurgerMenu({
  isHeaderMenuOpened,
}: BurgerMenuMobTabProps) {
  const locale = useLocale();
  const t = useTranslations("buttons");

  return (
    <div
      className={`${
        isHeaderMenuOpened ? "translate-x-0" : "translate-x-full"
      } absolute top-0 right-0 z-50 w-[100vw] h-[100dvh] tab:min-w-[360px] tab:max-h-[666px] tab:w-[40%] bg-beige 
      transition-transform duration-[600ms] overflow-y-auto`}
    >
      <BurgerMenuBgImages />
      <div className="container flex flex-col items-center max-w-full">
        <div className="flex justify-between items-center w-full h-[72px] mb-7">
          <LocaleSwitcher locale={locale as Locale} />
        </div>
        <NavMenu />
        <Button className="mt-12">{t("callBack")}</Button>
      </div>
    </div>
  );
}
