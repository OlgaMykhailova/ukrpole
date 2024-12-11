import React from "react";
import Section from "../shared/section/Section";
import SectionTitle from "../shared/titles/SectionTitle";
import Button from "../shared/buttons/Button";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";

export default function Cooperation() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Section className="flex flex-col items-center">
      <SectionTitle>{t("cooperationPage.title")}</SectionTitle>
      <Link href="/contacts" locale={locale} className="group outline-none">
        <Button>{t("buttons.startCooperation")}</Button>
      </Link>
    </Section>
  );
}
