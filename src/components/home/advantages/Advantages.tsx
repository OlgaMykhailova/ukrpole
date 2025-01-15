import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";

import AdvantagesList from "./AdvantagesList";

export default function Advantages() {
  const t = useTranslations("homePage.advantages");
  return (
    <Section>
      <SectionTitle>{t("title")}</SectionTitle>
      <AdvantagesList />
    </Section>
  );
}
