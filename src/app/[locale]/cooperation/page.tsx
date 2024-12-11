import React from "react";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Cooperation from "@/components/cooperation/Cooperation";
import { useTranslations } from "next-intl";

export default function CooperationPage() {
  const t = useTranslations();

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.cooperation"), href: "/cooperation" },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 pt-[72px] laptop:pt-[160px]">
        <Breadcrumbs crumbs={crumbs} />
        <Cooperation />
      </main>
      <Footer />
    </>
  );
}
