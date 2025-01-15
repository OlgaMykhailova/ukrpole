import { useLocale } from "next-intl";
import React from "react";

import { Locale } from "@/types/locale";

import LogoLink from "../../logoLink/LogoLink";
import CallBackApplicationTabDesk from "../callBackApplication/CallBackApplicationTabDesk";
import LocaleSwitcher from "../LocaleSwitcher";

interface HeaderTopProps {
  isAtTop: boolean;
}

export default function HeaderTop({ isAtTop }: HeaderTopProps) {
  const locale = useLocale();

  return (
    <div
      className={`relative container flex justify-between items-center max-w-[1920px] h-[102px] py-6 transition-all duration-500 ease-out ${
        isAtTop ? "top-0" : "-top-[102px]"
      }`}
    >
      <div className="flex-1 flex justify-start">
        <LocaleSwitcher locale={locale as Locale} />
      </div>
      <div className={`flex-1 flex justify-center`}>
        <LogoLink
          className={`w-[124px] h-auto tab:w-[162px] laptop:w-[204px] transition-all duration-500 ease-out ${
            isAtTop
              ? "translate-y-0 laptop:scale-100"
              : "translate-y-[87px] laptop:scale-[78.4%]"
          }`}
        />
      </div>
      <div className="flex-1 flex justify-end">
        <CallBackApplicationTabDesk />
      </div>
    </div>
  );
}
