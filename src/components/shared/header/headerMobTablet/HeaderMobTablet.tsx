"use client";
import { useLocale } from "next-intl";
import React, { useState } from "react";

import LogoLink from "@/components/shared/logoLink/LogoLink";
import { Locale } from "@/types/locale";

import Backdrop from "../../backdrop/Backdrop";
import CallBackApplicationTabDesk from "../callBackApplication/CallBackApplicationTabDesk";
import LocaleSwitcher from "../LocaleSwitcher";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import BurgerMenuButton from "./burgerMenu/BurgerMenuButton";
import HeaderMobTabBgImages from "./HeaderMobTabBgImages";

export default function HeaderMobTablet() {
  const locale = useLocale();
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <div
      className={`laptop:hidden fixed z-10 w-full h-[72px] border-b border-greenKhaki bg-beige`}
    >
      <HeaderMobTabBgImages />
      <div className="container flex items-center justify-between py-2 max-w-[1920px]">
        <div className="tab:hidden">
          <LocaleSwitcher locale={locale as Locale} />
        </div>
        <LogoLink className="w-[124px] h-8 tab:w-[162px] tab:h-[42px] laptop:w-[204px] laptop:h-[53px]" />
        <div className="hidden tab:flex">
          <CallBackApplicationTabDesk />
        </div>
        <div className="relative size-14">
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />
        </div>
      </div>
      <BurgerMenu
        isHeaderMenuOpened={isHeaderMenuOpened}
        setIsHeaderMenuOpened={setIsHeaderMenuOpened}
      />
      <Backdrop
        isVisible={isHeaderMenuOpened}
        onClick={() => setIsHeaderMenuOpened(false)}
      />
    </div>
  );
}
