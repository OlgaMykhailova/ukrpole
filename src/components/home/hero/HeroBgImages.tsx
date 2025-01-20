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
    <div className="absolute -z-10 flex flex-col justify-end w-full h-[560px] tab:h-[500px] laptop:h-[calc(100dvh-160px)]">
      <Image
        src="/images/backgrounds/heroHome/heroHomeBg.webp"
        alt="canned cucumbers and tomatoes on the background of tomato bushes"
        width={2048}
        height={1024}
        priority
        className={`absolute top-0 left-0 -z-20 w-full h-full object-cover origin-center ${
          isVisible
            ? "scale-100 translate-x-0 translate-y-0"
            : "scale-[115%] -translate-x-[30px] translate-y-[15px] tab:-translate-x-[60px] tab:translate-y-[30px]"
        } transition duration-[2000ms] ease-out`}
      />
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-heroHomeGradient"></div>
      <Image
        src="/images/backgrounds/heroHome/heroHomeCurveFigure.svg"
        alt="curved figure"
        width="1280"
        height="66"
        priority
        className="w-full h-auto"
      />
    </div>
  );
}
