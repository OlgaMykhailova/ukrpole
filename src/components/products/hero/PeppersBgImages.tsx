import React from "react";
import Image from "next/image";

export default function PeppersBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/productsHero/peppersBgLeft.svg"
        alt="peppers"
        width="97"
        height="116"
        priority
        className="hidden laptop:block absolute -z-10 bottom-[80px] left-[100px] w-[9%] h-auto"
      />
      <Image
        src="/images/backgrounds/productsHero/peppersBgRight.svg"
        alt="peppers"
        width="119"
        height="133"
        priority
        className="hidden laptop:block absolute -z-10 bottom-0 right-[100px] w-[9%] h-auto"
      />
    </>
  );
}
