import React from "react";
import HeaderDesktop from "./headerDesktop/HeaderDesktop";
import HeaderMobTablet from "./headerMobTablet/HeaderMobTablet";


export default function Header() {
  return (
    <header>
      <HeaderDesktop />
      <HeaderMobTablet />
    </header>
  );
}
