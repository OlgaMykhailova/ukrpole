import React from "react";
import Image from "next/image";

export default function BurgerMenuBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/burgerMenu/ginger.webp"
        alt="ginger"
        width="148"
        height="261"
        className="absolute top-[242px] left-0 w-[75px] h-auto"
      />
      <Image
        src="/images/backgrounds/burgerMenu/tomatoes.webp"
        alt="tomatoes"
        width="128"
        height="351"
        className="absolute top-[77px] right-0 w-auto h-[165px]"
      />
      <Image
        src="/images/backgrounds/burgerMenu/leek.webp"
        alt="leek"
        width="348"
        height="274"
        className="absolute bottom-0 left-[81px] w-[179px] h-auto"
      />
    </>
  );
}
