import React from "react";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { useTranslations } from "next-intl";
import Mission from "@/components/about/mission/Mission";
import Partners from "@/components/about/partners/Partners";
import Advantages from "@/components/about/advantages/Advantages";

export default function AboutPage() {
  const t = useTranslations();

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.about"), href: "/about" },
  ];

  return (
    <>
      <Header color="white" />
      <main className="flex-1 pt-[72px] laptop:pt-[160px]">
        <Breadcrumbs crumbs={crumbs} />
        <Mission />
        <Advantages />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
