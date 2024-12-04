import React from "react";
import HeaderDesktop from "./headerDesktop/HeaderDesktop";
import HeaderMobTablet from "./headerDesktop/headerMobTablet/HeaderMobTablet";

export default function Header() {
  return (
    <header>
      <HeaderDesktop />
      <HeaderMobTablet />
    </header>
  );
}
