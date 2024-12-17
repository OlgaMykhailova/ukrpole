import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

export default function FormDescription() {
  const locale = useLocale();
  const t = useTranslations("");

  return (
    <div className="mt-5 text-14reg tab:text-16reg">
      <div className="flex gap-x-2 w-full mb-6 text-14reg">
        <span className="text-darkRed">*</span>
        <p>{t("forms.requiredFields")}</p>
      </div>
      <p>
        {t("forms.agreement")}
        <Link
          href={`policy`}
          target="_blank"
          locale={locale}
          className="outline-none border-b text-greenDark border-greenDark active:text-greenKhaki active:border-greenKhaki 
      laptop:hover:text-greenKhaki laptop:focus-visible:text-greenKhaki laptop:hover:border-greenKhaki 
      laptop:focus-visible:border-greenKhaki transition duration-300 ease-out"
        >
          {t("forms.policy")}
        </Link>
        .
      </p>
    </div>
  );
}
