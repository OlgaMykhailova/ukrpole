import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Button from "@/components/shared/buttons/Button";
import IconLogoBataljon from "@/components/shared/icons/IconLogoBataljon";
import { Link } from "@/i18n/routing";

import HeroBgImages from "./HeroBgImages";
import HeroDescription from "./HeroDescription";
import PeppersBgImages from "./PeppersBgImages";

const SECTION_ID = "products-page-hero";

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.products"), href: "/products" },
  ];

  return (
    <section
      id={SECTION_ID}
      className="relative flex flex-col items-center pb-20 tab:pb-[100px]"
    >
      <div className="relative flex flex-col justify-between w-full aspect-[360/160] sm:aspect-[1280/360] overflow-hidden">
        <Breadcrumbs crumbs={crumbs} variant="light" />
        <HeroBgImages sectionId={SECTION_ID} />
      </div>
      <div className="container flex flex-col items-center">
        <HeroDescription />
        <div className="flex items-center gap-6 laptop:gap-7 mb-10">
          <Image
            src="/images/icons/logo.svg"
            alt="logo"
            width="204"
            height="53"
            priority
            className="w-[131px] laptop:w-[153px] h-auto"
          />
          <IconLogoBataljon className="w-[107px] laptop:w-[125px] h-auto text-yellow" />
        </div>
        <Link href="/contacts" locale={locale} className="group outline-none">
          <Button>{t("buttons.startCooperation")}</Button>
        </Link>
      </div>
      <PeppersBgImages />
    </section>
  );
}
