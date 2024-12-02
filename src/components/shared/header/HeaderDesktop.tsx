import React from "react";
import LogoLink from "../logoLink/LogoLink";
import LocaleSwitcher from "./LocaleSwitcher";
import { useLocale } from "next-intl";
import { Locale } from "@/types/locale";
import PhoneLink from "./PhoneLink";
import HeaderBgImages from "./HeaderBgImages";

interface HeaderDesktopProps {
  color?: "beige" | "white";
}

export default function HeaderDesktop({ color = "beige" }: HeaderDesktopProps) {
  const locale = useLocale();

  return (
    <div
      className={`hidden laptop:block fixed z-10 w-full h-[160px] ${
        color === "beige" ? "bg-beige" : "bg-white"
      }`}
    >
      <HeaderBgImages />
      <div className="container flex justify-between items-center max-w-[1720px] py-6">
        <div className="flex-1 flex justify-start">
          <LocaleSwitcher locale={locale as Locale} />
        </div>
        <div className="flex-1 flex justify-center">
          <LogoLink />
        </div>
        <div className="flex-1 flex justify-end">
          <PhoneLink />
        </div>
      </div>
    </div>
  );
}
