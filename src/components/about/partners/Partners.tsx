import React from "react";
import Section from "@/components/shared/section/Section";
import PartnersInfo from "@/components/home/partners/PartnersInfo";
import CooperationInfo from "@/components/cooperation/CooperationInfo";
import { Link } from "@/i18n/routing";
import Button from "@/components/shared/buttons/Button";
import { useTranslations, useLocale } from "next-intl";
import SectionTitle from "@/components/shared/titles/SectionTitle";

export default function Partners() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Section>
      <SectionTitle>{t("aboutPage.partners.title")}</SectionTitle>
      <PartnersInfo />
      <div className="flex flex-col items-center">
        <CooperationInfo />
        <Link href="/contacts" locale={locale} className="group outline-none">
          <Button>{t("buttons.startCooperation")}</Button>
        </Link>
      </div>
    </Section>
  );
}
