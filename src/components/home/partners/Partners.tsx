import React from "react";
import { useTranslations } from "next-intl";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import PartnersList from "./PartnersList";

export default function Partners() {
  const t = useTranslations("homePage.partners");
  return (
    <Section className="container max-w-[1720px]">
      <SectionTitle>{t("title")}</SectionTitle>
      <PartnersList />
    </Section>
  );
}
