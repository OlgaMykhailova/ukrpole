import { useTranslations } from "next-intl";
import React from "react";

import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { ProductItem } from "@/types/productItem";

import SimilarProductsSlider from "./SimilarProductsSlider";

interface SimilarProductsProps {
  currentProduct: ProductItem;
}

export default function SimilarProducts({
  currentProduct,
}: SimilarProductsProps) {
  const t = useTranslations("productPage");

  return (
    <Section>
      <SectionTitle>{t("similarProductsTitle")}</SectionTitle>
      <SimilarProductsSlider currentProduct={currentProduct} />
    </Section>
  );
}
