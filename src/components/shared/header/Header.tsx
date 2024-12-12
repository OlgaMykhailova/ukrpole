import React from "react";
import HeaderDesktop from "./headerDesktop/HeaderDesktop";
import HeaderMobTablet from "./headerMobTablet/HeaderMobTablet";

interface HeaderProps {
  color?: "beige" | "white";
}

export default function Header({ color = "beige" }: HeaderProps) {
  return (
    <header>
      <HeaderDesktop color={color} />
      <HeaderMobTablet color={color} />
    </header>
  );
}
