import React from "react";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import Mission from "@/components/about/mission/Mission";
import Partners from "@/components/about/partners/Partners";
import Advantages from "@/components/about/advantages/Advantages";
import Hero from "@/components/about/hero/Hero";

export default function AboutPage() {
  return (
    <>
      <Header color="white" />
      <main className="flex-1 pt-[72px] laptop:pt-[160px]">
        <Hero />
        <Mission />
        <Advantages />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
