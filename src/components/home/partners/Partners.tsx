import React from "react";
import { useTranslations } from "next-intl";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import PartnersList from "./PartnersList";
import PartnersSlider from "./PartnersSlider";

const partnersList = [
  "fora",
  "delvi",
  "varus",
  "kyshenya",
  "megamarket",
  "atb",
  "tavrija",
  "metro",
  "ultramarket",
  "novus",
  "fozzy",
  "delikat",
];

export default function Partners() {
  const t = useTranslations("homePage.partners");
  return (
    <>
      <Section className="container sm:flex flex-col items-center max-w-[1720px]">
        <SectionTitle>{t("title")}</SectionTitle>
        <PartnersSlider partnersList={partnersList} />
        <PartnersList partnersList={partnersList} />
      </Section>
    </>
  );
}
