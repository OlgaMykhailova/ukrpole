import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import CooperationInfo from "./CooperationInfo";
import Button from "@/components/shared/buttons/Button";
import CooperationTitle from "./CooperationTitle";

export default function Cooperation() {
  const t = useTranslations();

  return (
    <section className="relative mt-[calc(0.146*100vw-4px)] pb-20 tab:pb-[100px] scroll-mt-[72px] laptop:scroll-mt-[160px]">
      <Image
        src="/images/backgrounds/homeCooperation/field.svg"
        alt="green field"
        width="1280"
        height="187"
        className="absolute -top-[calc(0.146*100vw-4px)] w-full h-auto"
      />
      <div className="bg-green">
        <div className="container py-6 tab:py-10 max-w-[1720px]">
          <CooperationTitle />
          <div className="flex flex-col items-center justify-between h-full">
            <CooperationInfo />
            <Button variant="secondary" className="mt-6 tab:mt-5">
              {t("buttons.becomePartner")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
