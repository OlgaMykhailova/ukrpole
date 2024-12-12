import Button from "@/components/shared/buttons/Button";
import Section from "@/components/shared/section/Section";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import ProductsTabs from "./ProductsTabs";

export default function Products() {
  const t = useTranslations("buttons");
  const locale = useLocale();

  return (
    <Section className="flex flex-col items-center">
      <ProductsTabs />
      <Link href="/products" locale={locale} className="group outline-none">
        <Button className="mt-4 tab:mt-6">{t("goToCatalog")}</Button>
      </Link>
    </Section>
  );
}
