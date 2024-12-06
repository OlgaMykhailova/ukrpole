import { useLocale } from "next-intl";
import React from "react";

import { Locale } from "@/types/locale";
import LocaleSwitcher from "../../LocaleSwitcher";
import BurgerMenuBgImages from "./BurgerMenuBgImages";
import NavMenu from "../../navMenu/NavMenu";
import PhoneLink from "../../../phoneLink/PhoneLink";

interface BurgerMenuMobTabProps {
  isHeaderMenuOpened: boolean;
}

export default function BurgerMenu({
  isHeaderMenuOpened,
}: BurgerMenuMobTabProps) {
  const locale = useLocale();

  return (
    <div
      className={`${
        isHeaderMenuOpened
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      } absolute top-0 right-0 z-50 w-[100vw] h-[100dvh] tab:min-w-[360px] tab:max-h-[666px] tab:w-[40%] bg-beige 
      transition duration-[600ms] overflow-y-auto`}
    >
      <BurgerMenuBgImages />
      <div className="container flex flex-col items-center max-w-full">
        <div className="flex justify-between items-center w-full h-[72px] mb-7">
          <LocaleSwitcher locale={locale as Locale} />
        </div>
        <NavMenu />
        <PhoneLink className="mt-12" />
      </div>
    </div>
  );
}
