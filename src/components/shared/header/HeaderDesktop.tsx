import React from "react";
import LogoLink from "../logoLink/LogoLink";
import LocaleSwitcher from "./LocaleSwitcher";
import { useLocale } from "next-intl";
import { Locale } from "@/types/locale";
import PhoneLink from "./PhoneLink";

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
      <div className="container flex items-center max-w-[1720px]">
        <LocaleSwitcher locale={locale as Locale} />
        <LogoLink />
        <PhoneLink />
      </div>
    </div>
  );
}
