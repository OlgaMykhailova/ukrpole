import React from "react";
import Image from "next/image";

export default function HeroBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/heroHomeBg.webp"
        alt="canned cucumbers and tomatoes on the background of tomato bushes"
        layout="fill"
        priority
        objectPosition="22% center"
        className="-z-10 h-full object-cover tab:origin-center"
      />
      <div className="w-full h-full bg-heroHomeGradient"></div>
      <Image
        src="/images/backgrounds/heroHomeFigure.svg"
        alt="canned cucumbers and tomatoes on the background of tomato bushes"
        width={2048}
        height={1024}
        priority
        className="absolute bottom-[-2px] left-0"
      />
    </>
  );
}
