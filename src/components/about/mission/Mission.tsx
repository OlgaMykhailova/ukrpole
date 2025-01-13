import Section from "@/components/shared/section/Section";
import React from "react";
import MissionInfo from "./MissionInfo";
import MissionImage from "./MissionImage";

export default function Mission() {
  return (
    <Section className="flex flex-col gap-y-4 sm:flex-row-reverse justify-between items-center">
      <MissionInfo />
      <MissionImage />
    </Section>
  );
}
