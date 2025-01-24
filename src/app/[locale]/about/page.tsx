import React from "react";

import Advantages from "@/components/about/advantages/Advantages";
import Hero from "@/components/about/hero/Hero";
import Mission from "@/components/about/mission/Mission";
import Partners from "@/components/about/partners/Partners";
import Values from "@/components/about/values/Values";
import { Locale } from "@/types/locale";
import { generatePageMetaData } from "@/utils/generatePageMetaData";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return generatePageMetaData({
    locale,
    namespace: "metadata",
    canonical: "/about",
  });
}

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
