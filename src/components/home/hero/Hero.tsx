import React from "react";
import HeroBgImages from "./HeroBgImages";
import HeroInfo from "./HeroInfo";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-[2048px] h-[560px] tab:h-[500px] laptop:h-[calc(100dvh-160px)] mx-auto overflow-hidden">
      <HeroBgImages />
      <div className="flex flex-col justify-between h-full">
        <HeroInfo />
        <Image
          src="/images/backgrounds/heroHomeFigure.svg"
          alt="curved figure"
          width={2048}
          height={1024}
          priority
          className="-z-10"
        />
      </div>
    </section>
  );
}
