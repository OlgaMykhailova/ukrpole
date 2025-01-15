import { useLocale,useTranslations } from "next-intl";
import React from "react";

import Button from "@/components/shared/buttons/Button";
import { Link } from "@/i18n/routing";

import CooperationBgImages from "./CooperationBgImages";
import CooperationInfo from "./CooperationInfo";
import CooperationTitle from "./CooperationTitle";

const SECTION_ID = "home-page-cooperation-section";

export default function Cooperation() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section
      id={SECTION_ID}
      className="relative w-full pb-20 tab:pb-[100px] scroll-mt-[72px] laptop:scroll-mt-[160px]"
    >
      <CooperationBgImages sectionId={SECTION_ID} />
      <div className="bg-green">
        <div className="container py-6 tab:py-10 max-w-[1920px]">
          <CooperationTitle />
          <div className="flex flex-col items-center justify-between h-full">
            <CooperationInfo />
            <Link
              href="/cooperation"
              locale={locale}
              className="group mt-6 tab:mt-5 outline-none"
            >
              <Button variant="secondary">{t("buttons.becomePartner")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
