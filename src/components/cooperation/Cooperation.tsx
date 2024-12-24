import React from "react";
import Section from "../shared/section/Section";
import PageTitle from "../shared/titles/PageTitle";
import Button from "../shared/buttons/Button";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import CooperationList from "./CooperationList";
import CooperationInfo from "./CooperationInfo";

export default function Cooperation() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Section className="flex flex-col items-center">
      <PageTitle className="w-full" variant="center">
        {t("cooperationPage.title")}
      </PageTitle>
      <CooperationList />
      <CooperationInfo />
      <Link href="/contacts" locale={locale} className="group outline-none">
        <Button>{t("buttons.startCooperation")}</Button>
      </Link>
    </Section>
  );
}
