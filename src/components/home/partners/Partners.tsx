import React from "react";
import { useTranslations } from "next-intl";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import PartnersInfo from "./PartnersInfo";

export default function Partners() {
  const t = useTranslations("homePage.partners");

  return (
    <>
      <Section className="sm:flex flex-col items-center max-w-[1920px] overflow-hidden">
        <SectionTitle>{t("title")}</SectionTitle>
        <PartnersInfo />
      </Section>
    </>
  );
}
