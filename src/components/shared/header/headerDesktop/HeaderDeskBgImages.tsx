import React from "react";
import Image from "next/image";

interface HeaderDeskBgImagesProps {
  isAtTop: boolean;
  color: "beige" | "white";
}

export default function HeaderDeskBgImages({
  isAtTop,
  color,
}: HeaderDeskBgImagesProps) {
  return (
    <>
      <div
        className={`-z-20 absolute top-0 w-full transition-[height] duration-500 ease-out ${
          isAtTop ? "h-[160px]" : "h-[72px]"
        }  ${color === "beige" ? "bg-beige" : "bg-white"} `}
      ></div>
      <>
        <Image
          src="/images/backgrounds/headerDesktop/ginger.webp"
          alt="ginger"
          width="89"
          height="92"
          className={`absolute -z-10 bottom-0 left-0 transition duration-500 ease-out ${
            isAtTop ? "translate-y-0" : "-translate-y-[102px]"
          }`}
        />
        <Image
          src="/images/backgrounds/headerDesktop/tomatoes.webp"
          alt="tomatoes"
          width="270"
          height="160"
          className={`absolute z-10 top-[-6px] left-[12.73%] deskxl:left-[17%] deskxxl:left-[22%] transition duration-500 ease-out ${
            isAtTop ? "translate-y-0" : "-translate-y-[102px]"
          }`}
        />
        <Image
          src="/images/backgrounds/headerDesktop/pepper.webp"
          alt="pepper"
          width="160"
          height="100"
          className={`absolute z-10 top-0 right-[25.23%] deskxxl:right-[28%] transition duration-500 ease-out ${
            isAtTop ? "translate-y-0" : "-translate-y-[102px]"
          }`}
        />
        <Image
          src="/images/backgrounds/headerDesktop/leek.webp"
          alt="leek"
          width="197"
          height="145"
          className={`absolute -z-10 bottom-0 right-0 transition duration-500 ease-out ${
            isAtTop ? "translate-y-0" : "-translate-y-[102px]"
          }`}
        />
      </>
    </>
  );
}
