"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import PartnersList from "./PartnersList";
import PartnersSlider from "./PartnersSlider";
import { useMediaQuery } from "react-responsive";

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isLargeMob = useMediaQuery({ query: "(min-width: 640px)" });

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Section className="container sm:flex flex-col items-center max-w-[1720px]">
        <SectionTitle>{t("title")}</SectionTitle>
        {isLargeMob ? (
          <PartnersList partnersList={partnersList} />
        ) : (
          <PartnersSlider partnersList={partnersList} />
        )}
      </Section>
    </>
  );
}
