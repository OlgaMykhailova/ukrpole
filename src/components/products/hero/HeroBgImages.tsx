import React from "react";
import Image from "next/image";

export default function HeroBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/productsHero/productsHeroMob.webp"
        alt="field with tomatoes"
        width={720}
        height={320}
        priority
        className="sm:hidden absolute -z-10 top-0 left-0 w-full h-auto"
      />
      <Image
        src="/images/backgrounds/productsHero/productsHero.webp"
        alt="field with tomatoes"
        width={2560}
        height={720}
        priority
        className="hidden sm:block absolute -z-10 top-0 left-0 w-full h-auto"
      />
    </>
  );
}
