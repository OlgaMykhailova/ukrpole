"use client";
import Image from "next/image";
import React from "react";

import { useOnScreen } from "@/hooks/useOnScreen";

const SECTION_ID = "about-page-mission-image";

export default function MissionImage() {
  const { isVisible } = useOnScreen(SECTION_ID, { threshold: 0.8 });
  return (
    <div
      id={SECTION_ID}
      className="relative flex items-center justify-center w-full sm:w-[50%] laptop:w-[60%]"
    >
      <Image
        src="/images/contentImages/aboutMission/mission.webp"
        alt="canned vegetables"
        width={1390}
        height={998}
        priority
        className="w-full h-auto"
      />
      <Image
        src="/images/contentImages/aboutMission/leaves.webp"
        alt="canned vegetables"
        width={1362}
        height={992}
        priority
        className={`absolute top-0 left-0 -z-10 h-auto origin-center transition duration-[2000ms] ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />
    </div>
  );
}
