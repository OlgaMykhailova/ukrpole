import Section from "@/components/shared/section/Section";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import React from "react";
import { useTranslations } from "next-intl";
import SimilarProductsSlider from "./SimilarProductsSlider";
import { ProductItem } from "@/types/productItem";

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
