import React from "react";

import Advantages from "@/components/about/advantages/Advantages";
import Hero from "@/components/about/hero/Hero";
import Mission from "@/components/about/mission/Mission";
import Partners from "@/components/about/partners/Partners";
import Values from "@/components/about/values/Values";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Mission />
      <Advantages />
      <Values />
      <Partners />
    </>
  );
}
