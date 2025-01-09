import React from "react";
import HeroBgImages from "./HeroBgImages";
import HeroInfo from "./HeroInfo";
export default function Hero() {
  return (
    <section
      className="relative h-[560px] tab:h-[500px] laptop:h-[calc(100dvh-160px)] mx-auto mb-4 tab:mb-8 laptop:mb-4 
    overflow-hidden"
    >
      <HeroBgImages />
      <HeroInfo />
    </section>
  );
}
