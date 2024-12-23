import React from "react";
import Image from "next/image";

export default function HeroBgImages() {
  return (
    <div className="absolute -z-10 flex flex-col justify-end w-full h-[560px] tab:h-[500px] laptop:h-[calc(100dvh-160px)]">
      <Image
        src="/images/backgrounds/heroHome/heroHomeBg.webp"
        alt="canned cucumbers and tomatoes on the background of tomato bushes"
        width={2048}
        height={1024}
        priority
        className="absolute top-0 left-0 -z-20 w-full h-full object-cover object-22%-center tab:origin-center"
      />
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-heroHomeGradient"></div>
      <Image
        src="/images/backgrounds/heroHome/heroHomeFigure.svg"
        alt="curved figure"
        width={2048}
        height={1024}
        priority
        className="w-full h-auto"
      />
    </div>
  );
}
