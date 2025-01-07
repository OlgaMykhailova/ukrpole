import Image from "next/image";
import React from "react";

export default function ProductBgImages() {
  return (
    <>
      <Image
        src="/images/backgrounds/productInfo/productBgMob.svg"
        alt="grey background"
        width="360"
        height="171"
        className="tab:hidden absolute top-0 left-0 -z-10 w-full h-auto"
      />
      <Image
        src="/images/backgrounds/productInfo/productBgTab.svg"
        alt="grey background"
        width="768"
        height="209"
        className="hidden tab:block laptop:hidden absolute top-0 left-0 -z-10 w-full h-auto"
      />
      <Image
        src="/images/backgrounds/productInfo/productBgDesk.svg"
        alt="grey background"
        width="1280"
        height="261"
        className="hidden laptop:block absolute top-0 left-0 -z-10 w-full h-auto"
      />
    </>
  );
}
