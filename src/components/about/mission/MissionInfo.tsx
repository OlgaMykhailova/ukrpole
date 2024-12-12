import SectionTitle from "@/components/shared/titles/SectionTitle";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MissionInfo() {
  const t = useTranslations("aboutPage.mission");

  return (
    <div className="relative flex flex-col justify-center items-center w-full max-w-[400px] tab:max-w-[540px] aspect-square">
      <Image
        src="/images/icons/strokeCircle.svg"
        alt="round outline"
        width={344}
        height={343}
        className="absolute top-0 left-0 w-full h-auto"
      />
      <h2 className="mb-2 tab:mb-4 font-alegreya text-32med tab:text-40med uppercase text-center">
        {t("title")}
      </h2>
      <p className="w-[84.1%] sm:w-[81%] sm:max-w-[378px] text-center">
        {t("description")}
      </p>
    </div>
  );
}
