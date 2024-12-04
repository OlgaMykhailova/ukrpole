import React from "react";
import Image from "next/image";

export default function HeaderMobTabBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/tomatoes.svg"
        alt="tomatoes"
        width="270"
        height="160"
        className="absolute top-0 left-[18.9%] tab:left-[26.3%] w-[70px] sm:w-[127px] h-auto"
      />
      <Image
        src="/images/backgrounds/pepperMob.svg"
        alt="pepper"
        width="87"
        height="49"
        className="absolute bottom-0 right-[17.2%] tab:right-[14%] w-[61px] sm:w-[87px] h-auto"
      />
    </>
  );
}
