import React from "react";
import Section from "../shared/section/Section";
import SectionTitle from "../shared/titles/SectionTitle";
import { useTranslations } from "next-intl";

export default function Cooperation() {
  const t = useTranslations();

  return (
    <Section>
      <SectionTitle>{t("cooperationPage.title")}</SectionTitle>
    </Section>
  );
}
