"use client";
import React, { useEffect, useState } from "react";
import HeaderDeskBgImages from "./HeaderDeskBgImages";
import NavMenu from "../navMenu/NavMenu";
import HeaderTop from "./HeaderTop";

interface HeaderDesktopProps {
  color?: "beige" | "white";
}

export default function HeaderDesktop({ color = "beige" }: HeaderDesktopProps) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden laptop:block fixed z-10 w-full  transition-[height] duration-500 ease-out ${
        isAtTop ? "h-[160px]" : "h-[72px]"
      }`}
    >
      <HeaderDeskBgImages color={color} isAtTop={isAtTop} />
      <HeaderTop isAtTop={isAtTop} />
      <NavMenu isAtTop={isAtTop} />
    </div>
  );
}
