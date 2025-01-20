import React from "react";

import IconLogoBataljon from "../icons/IconLogoBataljon";
import LogoLink from "../logoLink/LogoLink";
import NavMenu from "./navMenu/NavMenu";

export default function FooterNavigation() {
  return (
    <div className="bg-green">
      <div className="container flex flex-col items-center gap-6 laptop:flex-row laptop:justify-between max-w-[1920px] py-6 laptop:py-[62px]">
        <div className="flex flex-col tab:flex-row items-center gap-6 laptop:gap-7">
          <LogoLink className="w-[182px] laptop:w-[167px] h-auto" />
          <IconLogoBataljon className="w-[129px] laptop:w-[138px] h-auto text-greenDark" />
        </div>
        <NavMenu />
      </div>
    </div>
  );
}
