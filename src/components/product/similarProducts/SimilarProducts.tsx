import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import React from "react";
import { useTranslations } from "next-intl";

export default function SimilarProducts() {
  const t = useTranslations("productPage");
  return (
    <Section>
      <SectionTitle>{t("similarProductsTitle")}</SectionTitle>
    </Section>
  );
}
