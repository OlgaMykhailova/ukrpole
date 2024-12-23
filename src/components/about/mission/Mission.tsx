import Section from "@/components/shared/section/Section";
import React from "react";
import MissionInfo from "./MissionInfo";
import Image from "next/image";

export default function Mission() {
  return (
    <Section className="flex flex-col gap-y-4 sm:flex-row-reverse justify-between items-center">
      <MissionInfo />
      <Image
        src="/images/contentImages/aboutMission/mission.webp"
        alt="canned vegetables"
        width={1390}
        height={1141}
        priority
        className="w-full sm:w-[50%] laptop:w-[60%] h-auto"
      />
    </Section>
  );
}
