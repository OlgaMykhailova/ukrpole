import { useLocale,useTranslations } from "next-intl";
import React from "react";

import Button from "@/components/shared/buttons/Button";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Link } from "@/i18n/routing";

import NewsList from "./NewsList";

export default function News() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Section className="flex flex-col items-center">
      <SectionTitle>{t("homePage.news.title")}</SectionTitle>
      <NewsList />
      <Link
        href="/news"
        locale={locale}
        className="group block mt-8 tab:mt-14 laptop:mt-16 outline-none"
      >
        <Button>{t("buttons.seeAll")}</Button>
      </Link>
    </Section>
  );
}
