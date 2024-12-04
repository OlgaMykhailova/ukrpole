import React from "react";
import Image from "next/image";

export default function HeroBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/heroHomeBg.webp"
        alt="canned cucumbers and tomatoes on the background of tomato bushes"
        width={2048}
        height={1024}
        priority
        className="absolute top-0 left-0 -z-20 w-[calc(100%-1px)] h-[calc(100%-1px)] object-cover object-22%-center tab:origin-center"
      />
      <div className="absolute top-0 left-0 -z-10 w-[calc(100%-1px)] h-[calc(100%-1px)] bg-heroHomeGradient"></div>
    </>
  );
}
