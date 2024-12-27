import Image from "next/image";
import React from "react";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { useTranslations } from "next-intl";

export default function ProductsHero() {
  const t = useTranslations();

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.products"), href: "/products" },
  ];

  return (
    <section className="relative aspect-[360/160] sm:aspect-[770/202]">
      <Breadcrumbs crumbs={crumbs} variant="light" />
      <Image
        src="/images/backgrounds/productsHero/productsHeroMob.webp"
        alt="field with tomatoes"
        width={720}
        height={320}
        priority
        className="sm:hidden absolute -z-10 top-0 left-0 w-full h-auto"
      />
      <Image
        src="/images/backgrounds/productsHero/productsHero.webp"
        alt="field with tomatoes"
        width={2560}
        height={720}
        priority
        className="hidden sm:block absolute -z-10 top-0 left-0 w-full h-auto"
      />
    </section>
  );
}
