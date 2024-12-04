"use client";
import React, { useState } from "react";
import LocaleSwitcher from "../LocaleSwitcher";
import LogoLink from "@/components/shared/logoLink/LogoLink";
import { useLocale } from "next-intl";
import { Locale } from "@/types/locale";
import BurgerMenuButton from "./BurgerMenuButton";
import HeaderMobTabBgImages from "./HeaderMobTabBgImages";
import PhoneLink from "../PhoneLink";
import BurgerMenu from "./BurgerMenu";
import Backdrop from "../../backdrop/Backdrop";

interface HeaderMobTabletProps {
  color?: "beige" | "white";
}

export default function HeaderMobTablet({
  color = "beige",
}: HeaderMobTabletProps) {
  const locale = useLocale();
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <div
      className={`laptop:hidden fixed z-10 w-full h-[72px] ${
        color === "beige" ? "bg-beige" : "bg-white"
      }`}
    >
      <HeaderMobTabBgImages />
      <div className="container flex items-center justify-between py-2 max-w-[1720px]">
        <div className="tab:hidden">
          <LocaleSwitcher locale={locale as Locale} />
        </div>
        <LogoLink />
        <div className="hidden tab:flex">
          <PhoneLink />
        </div>
        <div className="size-14">
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />
        </div>
      </div>
      <BurgerMenu isHeaderMenuOpened={isHeaderMenuOpened} />
      <Backdrop
        isVisible={isHeaderMenuOpened}
        onClick={() => setIsHeaderMenuOpened(false)}
      />
    </div>
  );
}
