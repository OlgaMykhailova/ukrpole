import Image from "next/image";
import React from "react";

export default function FooterBgImages() {
  return (
    <>
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
    </>
  );
}
