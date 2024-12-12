import Section from "@/components/shared/section/Section";
import React from "react";
import MissionInfo from "./MissionInfo";
import Image from "next/image";

export default function Mission() {
  return (
    <Section className="flex flex-col sm:flex-row-reverse justify-between items-center">
      <MissionInfo />
      <Image
        src="/images/contentImages/aboutMission/mission.webp"
        alt="canned vegetables"
        width={1390}
        height={1200}
        className="w-full sm:w-[45.6%] laptop:w-[60%]"
      />
    </Section>
  );
}
