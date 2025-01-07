import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import CooperationInfo from "./CooperationInfo";
import Button from "@/components/shared/buttons/Button";
import CooperationTitle from "./CooperationTitle";
import { Link } from "@/i18n/routing";

export default function Cooperation() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative w-[100vw] mt-[calc(0.146*100vw-3px)] pb-20 tab:pb-[100px] scroll-mt-[72px] laptop:scroll-mt-[160px]">
      <Image
        src="/images/backgrounds/homeCooperation/field.svg"
        alt="green field"
        width="1280"
        height="187"
        className="absolute -top-[calc(0.146*100vw-3px)] left-0 right-0 w-[100vw] h-auto supports-[-webkit-appearance:none]:w-[100vw] 
        supports-[-webkit-appearance:none]:absolute supports-[-webkit-appearance:none]:left-0 supports-[-webkit-appearance:none]:right-0"
      />
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
