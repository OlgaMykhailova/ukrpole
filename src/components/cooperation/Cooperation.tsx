import { useLocale,useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

import Button from "../shared/buttons/Button";
import Section from "../shared/section/Section";
import PageTitle from "../shared/titles/PageTitle";
import CooperationInfo from "./CooperationInfo";
import CooperationList from "./CooperationList";

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
