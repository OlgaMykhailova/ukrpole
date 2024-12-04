import React from "react";
import HeroBgImages from "./HeroBgImages";
import HeroInfo from "./HeroInfo";

export default function Hero() {
  return (
    <section className="relative -z-20 max-w-[2048px] h-[560px] tab:h-[500px] laptop:h-[calc(100dvh-160px)] mx-auto overflow-hidden bg-beige">
      <HeroBgImages />
      <HeroInfo />
    </section>
  );
}
