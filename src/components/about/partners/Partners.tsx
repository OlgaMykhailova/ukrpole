import { useLocale,useTranslations } from "next-intl";
import React from "react";

import CooperationInfo from "@/components/cooperation/CooperationInfo";
import PartnersInfo from "@/components/home/partners/PartnersInfo";
import Button from "@/components/shared/buttons/Button";
import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Link } from "@/i18n/routing";

export default function Partners() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Section className="overflow-hidden">
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
