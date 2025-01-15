"use client";
import { throttle } from "lodash";
import React, { useEffect, useState } from "react";

import NavMenu from "../navMenu/NavMenu";
import HeaderDeskBgImages from "./HeaderDeskBgImages";
import HeaderTop from "./HeaderTop";

export default function HeaderDesktop() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsAtTop(window.scrollY <= 72);
      });
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden laptop:block fixed z-10 w-[100vw] transition-[height] duration-500 ease-out ${
        isAtTop ? "h-[160px]" : "h-[72px]"
      }`}
    >
      <HeaderDeskBgImages isAtTop={isAtTop} />
      <HeaderTop isAtTop={isAtTop} />
      <NavMenu isAtTop={isAtTop} />
    </div>
  );
}
