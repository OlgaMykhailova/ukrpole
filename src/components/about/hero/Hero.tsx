import Image from "next/image";
import React from "react";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.about"), href: "/about" },
  ];

  return (
    <section className="relative w-full aspect-[720/320] sm:aspect-[2560/800] overflow-hidden">
      <Breadcrumbs crumbs={crumbs} variant="light" />
      <Image
        src="/images/backgrounds/aboutHero/aboutHeroMob.webp"
        alt="field with tomatoes"
        width={720}
        height={320}
        priority
        className="sm:hidden absolute -z-10 top-0 left-0 w-full h-auto"
      />
      <Image
        src="/images/backgrounds/aboutHero/aboutHero.webp"
        alt="field with tomatoes"
        width={2560}
        height={800}
        priority
        className="hidden sm:block absolute -z-10 top-0 left-0 w-full h-auto"
      />
    </section>
  );
}
