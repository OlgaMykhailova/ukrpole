import { useTranslations } from "next-intl";
import React from "react";

import Section from "../shared/section/Section";
import PageTitle from "../shared/titles/PageTitle";
import NewsList from "./NewsList";

const SECTION_ID = "news";

export default function News() {
  const t = useTranslations("newsPage");

  return (
    <Section id={SECTION_ID}>
      <PageTitle>{t("title")}</PageTitle>
      <NewsList id={SECTION_ID} />
    </Section>
  );
}
