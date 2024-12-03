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
        className="h-full object-cover tab:origin-center"
      />
      <Image
        src="/images/backgrounds/heroHomeFigure.svg"
        alt="canned cucumbers and tomatoes on the background of tomato bushes"
        width={2048}
        height={1024}
        priority
        className="absolute bottom-[-2px] left-[1px]"
      />
    </>
  );
}
