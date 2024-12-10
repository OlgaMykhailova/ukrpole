import React from "react";
import Image from "next/image";

export default function FooterBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/footer/bgMob.svg"
        alt="green background"
        width="360"
        height="73"
        className="absolute -top-[calc(0.203*100vw-4px)] tab:hidden w-full h-auto"
      />
      <Image
        src="/images/backgrounds/footer/bgTab.svg"
        alt="green background"
        width="768"
        height="98"
        className="absolute -top-[calc(0.128*100vw-4px)] hidden tab:block laptop:hidden w-full h-auto"
      />
      <Image
        src="/images/backgrounds/footer/bgDesk.svg"
        alt="green background"
        width="1280"
        height="108"
        className="absolute -top-[calc(0.084*100vw-4px)] hidden laptop:block w-full h-auto"
      />
    </>
  );
}
