import React from "react";

import Section from "@/components/shared/section/Section";

import MissionImage from "./MissionImage";
import MissionInfo from "./MissionInfo";

export default function Mission() {
  return (
    <Section className="flex flex-col gap-y-4 sm:flex-row-reverse justify-between items-center">
      <MissionInfo />
      <MissionImage />
    </Section>
  );
}
