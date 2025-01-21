import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

export default function MissionInfo() {
  const t = useTranslations("aboutPage.mission");

  return (
    <div className="relative flex flex-col justify-center items-center w-full tab:w-[51.7%] sm:min-w-[320px] max-w-[430px] tab:max-w-[460px] laptop:max-w-[560px] aspect-square mt-8 tab:mt-0">
      <Image
        src="/images/icons/strokeCircle.svg"
        alt="round outline"
        width={344}
        height={343}
        priority
        className="absolute top-0 left-0 laptop:scale-90 w-full h-auto"
      />
      <Image
        src="/images/icons/bubbles.svg"
        alt="bubbles"
        width={67}
        height={61}
        priority
        className="absolute -top-8 tab:top-0 laptop:top-3 right-0"
      />
      <h2 className="mb-2 tab:mb-3 laptop:mb-4 font-alegreya text-32med tab:text-40med uppercase text-center">
        {t("title")}
      </h2>
      <p className="w-[276px] tab:w-[300px] laptop:w-[339px] sm:max-w-[378px] text-center">
        {t("description")}
      </p>
    </div>
  );
}
