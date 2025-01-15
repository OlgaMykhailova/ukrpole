import { useLocale,useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

export default function FooterBottom() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <div className="bg-beige">
      <div
        className="container flex flex-col-reverse tab:flex-row tab:justify-between gap-y-4 items-center justify-center max-w-[1920px] h-[114px] 
    tab:h-[57px] text-18med"
      >
        <p className="text-darkGrey"> {t("rightsReserved")}</p>
        <Link
          href="/policy"
          locale={locale}
          className="outline-none laptop:hover:text-greenDark focus-visible:text-greenDark active:text-greenDark transition duration-300 
        ease-out"
        >
          {t("policy")}
        </Link>
      </div>
    </div>
  );
}
