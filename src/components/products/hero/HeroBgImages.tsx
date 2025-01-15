"use client";
import Image from "next/image";
import React from "react";

import { useOnScreen } from "@/hooks/useOnScreen";

interface HeroBgImagesProps {
  sectionId: string;
}

export default function HeroBgImages({ sectionId }: HeroBgImagesProps) {
  const { isVisible } = useOnScreen(sectionId);

  return (
    <>
      <Image
        src="/images/backgrounds/productsHero/productsHeroMob.webp"
        alt="field with tomatoes"
        width={720}
        height={320}
        priority
        className={`sm:hidden absolute -z-10 top-0 left-0 w-full h-auto ${
          isVisible
            ? "scale-100 translate-x-0 translate-y-0"
            : "scale-[115%] -translate-x-[15px] -translate-y-[30px]"
        } transition duration-[2000ms] ease-out`}
      />
      <Image
        src="/images/backgrounds/productsHero/productsHero.webp"
        alt="field with tomatoes"
        width={2560}
        height={720}
        priority
        className={`hidden sm:block absolute -z-10 top-0 left-0 w-full h-auto ${
          isVisible
            ? "scale-100 translate-x-0 translate-y-0"
            : "scale-[115%] sm:-translate-x-[30px] sm:-translate-y-[50px] laptop:-translate-x-[50px] laptop:-translate-y-[70px]"
        } transition duration-[2000ms] ease-out`}
      />
      <Image
        src="/images/backgrounds/productsHero/curveFigure.svg"
        alt="curved figure"
        width={1280}
        height={73}
        priority
        className="w-full h-auto"
      />
    </>
  );
}
