import React from "react";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { useTranslations, useLocale } from "next-intl";
import HeroBgImages from "./HeroBgImages";
import HeroDescription from "./HeroDescription";
import Button from "@/components/shared/buttons/Button";
import { Link } from "@/i18n/routing";
import PeppersBgImages from "./PeppersBgImages";

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.products"), href: "/products" },
  ];

  return (
    <section className="relative flex flex-col items-center pb-20 tab:pb-[100px]">
      <div className="relative w-full aspect-[360/160] sm:aspect-[770/202]">
        <Breadcrumbs crumbs={crumbs} variant="light" />
        <HeroBgImages />
      </div>
      <div className="container flex flex-col items-center">
        <HeroDescription />
        <Link href="/contacts" locale={locale} className="group outline-none">
          <Button>{t("buttons.startCooperation")}</Button>
        </Link>
      </div>
      <PeppersBgImages />
    </section>
  );
}
