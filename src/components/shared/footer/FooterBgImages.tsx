import React from "react";
import Image from "next/image";

export default function FooterBgImages() {
  return (
    <div className="relative">
      <Image
        src="/images/backgrounds/footer/bgMob.svg"
        alt="green background"
        width="360"
        height="73"
        className="tab:hidden w-full h-auto"
      />
      <Image
        src="/images/backgrounds/footer/bgTab.svg"
        alt="green background"
        width="768"
        height="98"
        className="hidden tab:block laptop:hidden w-full h-auto"
      />
      <Image
        src="/images/backgrounds/footer/bgDesk.svg"
        alt="green background"
        width="1280"
        height="108"
        className="hidden laptop:block w-full h-auto"
      />
      <div className="absolute -bottom-1 left-0 -z-10 w-full h-[6px] bg-green"></div>
    </div>
  );
}
