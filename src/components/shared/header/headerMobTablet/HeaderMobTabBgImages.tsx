import React from "react";
import Image from "next/image";

export default function HeaderMobTabBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/headerMobTab/tomatoesMob.webp"
        alt="tomatoes"
        width="285"
        height="144"
        className="absolute -z-10 top-0 left-[18.9%] tab:left-[26.3%] w-[86px] sm:w-[127px] tab:w-[144px] h-auto"
      />
      <Image
        src="/images/backgrounds/headerMobTab/pepperMob.webp"
        alt="pepper"
        width="174"
        height="98"
        className="absolute -z-10 bottom-0 right-[17.2%] tab:right-[14%] w-[61px] sm:w-[87px] tab:w-[98px] h-auto"
      />
    </>
  );
}
