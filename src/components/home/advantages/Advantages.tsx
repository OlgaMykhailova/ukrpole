import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import React from "react";
import { useTranslations } from "next-intl";

export default function Advantages() {
  const t = useTranslations("homePage.advantages");
  return (
    <Section>
      <SectionTitle>{t("title")}</SectionTitle>
    </Section>
  );
}
