import React from "react";
import FooterBottom from "./FooterBottom";
import FooterBgImages from "./FooterBgImages";
import FooterNavigation from "./FooterNavigation";

export default function Footer() {
  return (
    <footer className="relative mt-[calc(0.203*100vw-3px)] tab:mt-[calc(0.128*100vw-3px)] laptop:mt-[calc(0.084*100vw-3px)]">
      <FooterBgImages />
      <FooterNavigation />
      <FooterBottom />
    </footer>
  );
}
