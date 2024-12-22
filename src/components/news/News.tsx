import React from "react";
import Section from "../shared/section/Section";
import { useTranslations } from "next-intl";
import PageTitle from "../shared/titles/PageTitle";

export default function News() {
  const t = useTranslations("newsPage");

  return (
    <Section>
      <PageTitle>{t("title")}</PageTitle>
    </Section>
  );
}
