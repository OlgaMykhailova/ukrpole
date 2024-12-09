import React from "react";
import CallBackApplication from "../callBackApplication/CallBackApplication";
import LocaleSwitcher from "../LocaleSwitcher";
import LogoLink from "../../logoLink/LogoLink";
import { useLocale } from "next-intl";
import { Locale } from "@/types/locale";

interface HeaderTopProps {
  isAtTop: boolean;
}

export default function HeaderTop({ isAtTop }: HeaderTopProps) {
  const locale = useLocale();

  return (
    <div
      className={`relative container flex justify-between items-center max-w-[1720px] h-[102px] py-6 transition-all duration-500 ease-out ${
        isAtTop ? "top-0" : "-top-[102px]"
      }`}
    >
      <div className="flex-1 flex justify-start">
        <LocaleSwitcher locale={locale as Locale} />
      </div>
      <div className={`flex-1 flex justify-center `}>
        <LogoLink
          className={`w-[124px] h-auto tab:w-[162px] transition-all duration-500 ease-out ${
            isAtTop
              ? "translate-y-0 laptop:w-[204px]"
              : "translate-y-[87px] laptop:w-[160px]"
          }`}
        />
      </div>
      <div className="flex-1 flex justify-end">
        <CallBackApplication />
      </div>
    </div>
  );
}
