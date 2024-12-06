import Button from "@/components/shared/buttons/Button";
import Section from "@/components/shared/section/Section";
import React from "react";
import { useTranslations } from "next-intl";

export default function Products() {
  const t = useTranslations("buttons");

  return (
    <Section className="mt-4 tab:mt-8 laptop:mt-4">
      <Button className="mx-auto">{t("goToCatalog")}</Button>
    </Section>
  );
}
