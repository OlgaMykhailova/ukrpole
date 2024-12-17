import Image from "next/image";
import React from "react";

import { ADDRESS_LINK } from "@/constants/constants";

export default function Map() {
  return (
    <a
      href={ADDRESS_LINK}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="relative block laptop:hidden mt-10 laptop:mt-14 outline-none"
    >
      <Image
        src="/images/contentImages/contactsMap/map.png"
        alt="map"
        width="1280"
        height="1280"
        className="w-full h-auto aspect-[1/1] sm:h-[390px] object-cover origin-left"
      />
      <Image
        src="/images/icons/mapPinRed.svg"
        alt="map pin"
        width="48"
        height="48"
        className="absolute left-[calc(60.5%-48px)] top-[calc(48.6%-48px)] sm:left-[55%] sm:top-[134px]"
      />
    </a>
  );
}
