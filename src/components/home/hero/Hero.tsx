import React from "react";
import HeroBgImages from "./HeroBgImages";

export default function Hero() {
  return (
    <section className="relative h-[560px] tab:h-[500px] laptop:h-[calc(100dvh-160px)] overflow-hidden">
      <HeroBgImages />
    </section>
  );
}
