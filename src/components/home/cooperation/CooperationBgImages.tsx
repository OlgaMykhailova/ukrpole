"use client";
import React from "react";
import Image from "next/image";
import { useOnScreen } from "@/hooks/useOnScreen";

interface CooperationBgImagesProps {
  sectionId: string;
}

export default function CooperationBgImages({
  sectionId,
}: CooperationBgImagesProps) {
  const { isVisible } = useOnScreen(sectionId);

  return (
    <div className="relative aspect-[1280/187]">
      <Image
        src="/images/backgrounds/homeCooperation/fieldBackground.svg"
        alt="green field"
        width="1280"
        height="152"
        className="absolute bottom-0 left-0 -z-20 w-full h-auto"
      />
      <Image
        src="/images/backgrounds/homeCooperation/farm.svg"
        alt="farm"
        width="1280"
        height="187"
        className={`hidden tab:block relative -z-10 w-full h-auto ${
          isVisible ? "translate-y-0" : "translate-y-full"
        } transition duration-[1700ms] ease-outBack`}
      />
      <Image
        src="/images/backgrounds/homeCooperation/farmMob.svg"
        alt="farm"
        width="360"
        height="60"
        className={`tab:hidden relative -z-10 w-full h-auto ${
          isVisible ? "translate-y-0" : "translate-y-full"
        } transition duration-[1700ms] ease-outBack`}
      />
      <Image
        src="/images/backgrounds/homeCooperation/fieldForeground.svg"
        alt="green field"
        width="1280"
        height="113"
        className="absolute bottom-0 left-0 z-[5] w-full h-auto"
      />
    </div>
  );
}
