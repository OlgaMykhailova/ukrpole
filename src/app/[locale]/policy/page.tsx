import { useTranslations } from "next-intl";
import React from "react";

import Section1 from "@/components/policy/Section1";
import Section2 from "@/components/policy/Section2";
import Section3 from "@/components/policy/Section3";
import Section4 from "@/components/policy/Section4";
import Section5 from "@/components/policy/Section5";
import Section6 from "@/components/policy/Section6";
import Section7 from "@/components/policy/Section7";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Section from "@/components/shared/section/Section";
import PageTitle from "@/components/shared/titles/PageTitle";
import { Locale } from "@/types/locale";
import { generatePageMetaData } from "@/utils/generatePageMetaData";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return generatePageMetaData({
    locale,
    namespace: "metadata",
    canonical: "/policy",
  });
}

export default function PolicyPage() {
  const t = useTranslations("");
  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.policy"), href: "/policy" },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <Section>
        <PageTitle>{t("policyPage.title")}</PageTitle>
        <p className="laptop:w-[57.4%] mb-8 laptop:mb-12">
          {t("policyPage.description")}
        </p>
        <ul className="flex flex-col gap-y-8 tab:gap-y-10">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </ul>
      </Section>
    </>
  );
}
