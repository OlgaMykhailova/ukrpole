import Button from "@/components/shared/buttons/Button";
import Section from "@/components/shared/section/Section";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Products() {
  const t = useTranslations("buttons");
  const locale = useLocale();

  return (
    <Section className="mt-4 tab:mt-8 laptop:mt-4">
      <Link href="/products" locale={locale} className="outline-none">
        <Button className="mx-auto">{t("goToCatalog")}</Button>
      </Link>
    </Section>
  );
}
