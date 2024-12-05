import React from "react";
import Image from "next/image";

export default function HeaderDeskBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/headerDesktop/ginger.webp"
        alt="ginger"
        width="89"
        height="92"
        className="absolute -z-10 bottom-[22px] left-0"
      />
      <Image
        src="/images/backgrounds/headerDesktop/tomatoes.webp"
        alt="tomatoes"
        width="270"
        height="160"
        className="absolute -z-10 top-0 left-[12.73%] deskxl:left-[17%] deskxxl:left-[22%]"
      />
      <Image
        src="/images/backgrounds/headerDesktop/pepper.webp"
        alt="pepper"
        width="160"
        height="100"
        className="absolute -z-10 top-0 right-[25.23%] deskxxl:right-[28%]"
      />
      <Image
        src="/images/backgrounds/headerDesktop/leek.webp"
        alt="leek"
        width="197"
        height="145"
        className="absolute -z-10 bottom-0 right-0"
      />
    </>
  );
}
