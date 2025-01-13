"use client";
import React from "react";
import { useOnScreen } from "@/hooks/useOnScreen";
import Image from "next/image";

export default function MissionImage() {
  return (
    <Image
      src="/images/contentImages/aboutMission/mission.webp"
      alt="canned vegetables"
      width={1390}
      height={1141}
      priority
      className="w-full sm:w-[50%] laptop:w-[60%] h-auto"
    />
  );
}
