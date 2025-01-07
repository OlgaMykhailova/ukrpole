import React from "react";
import LogoLink from "../logoLink/LogoLink";
import NavMenu from "./navMenu/NavMenu";

export default function FooterNavigation() {
  return (
    <div className="bg-green">
      <div className="container flex flex-col items-center gap-6 laptop:flex-row laptop:justify-between max-w-[1920px] py-6 laptop:py-[62px]">
        <LogoLink className="w-[204px] h-auto" />
        <NavMenu />
      </div>
    </div>
  );
}
