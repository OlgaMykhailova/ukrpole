import React from "react";
import Image from "next/image";

export default function HeaderBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/ginger.svg"
        alt="ginger"
        width="89"
        height="92"
        className="absolute bottom-[22px] left-0"
      />
      <Image
        src="/images/backgrounds/tomatoes.svg"
        alt="tomatoes"
        width="270"
        height="160"
        className="absolute top-0 left-[12.73%]"
      />
      <Image
        src="/images/backgrounds/pepper.svg"
        alt="pepper"
        width="160"
        height="100"
        className="absolute top-0 right-[25.23%]"
      />
      <Image
        src="/images/backgrounds/leek.svg"
        alt="leek"
        width="197"
        height="145"
        className="absolute bottom-0 right-0"
      />
    </>
  );
}
