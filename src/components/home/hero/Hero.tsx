import React from "react";
import HeroBgImages from "./HeroBgImages";
import HeroInfo from "./HeroInfo";

const SECTION_ID = "home-page-hero";

export default function Hero() {
  return (
    <section
      id={SECTION_ID}
      className="relative h-[560px] tab:h-[500px] laptop:h-[calc(100dvh-160px)] mx-auto mb-4 tab:mb-8 laptop:mb-4 
    overflow-hidden"
    >
      <HeroBgImages sectionId={SECTION_ID} />
      <HeroInfo sectionId={SECTION_ID} />
    </section>
  );
}
