import React from "react";
import FooterBottom from "./FooterBottom";
import FooterBgImages from "./FooterBgImages";
import FooterNavigation from "./FooterNavigation";

export default function Footer() {
  return (
    <footer>
      <FooterBgImages />
      <FooterNavigation />
      <FooterBottom />
    </footer>
  );
}
