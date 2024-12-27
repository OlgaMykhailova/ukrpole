import React from "react";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { useTranslations, useLocale } from "next-intl";
import HeroBgImages from "./HeroBgImages";
import HeroDescription from "./HeroDescription";
import Button from "@/components/shared/buttons/Button";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.products"), href: "/products" },
  ];

  return (
    <section className="flex flex-col items-center pb-20 tab:pb-[100px] laptop:pb-[150px]">
      <div className="relative w-full aspect-[360/160] sm:aspect-[770/202]">
        <Breadcrumbs crumbs={crumbs} variant="light" />
        <HeroBgImages />
      </div>
      <HeroDescription />
      <Link href="/contacts" locale={locale} className="group outline-none">
        <Button>{t("buttons.startCooperation")}</Button>
      </Link>
    </section>
  );
}
