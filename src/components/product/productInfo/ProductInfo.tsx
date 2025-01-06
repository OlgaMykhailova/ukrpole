import React from "react";
import { useTranslations } from "next-intl";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { ProductItem } from "@/types/productItem";
import ProductBgImages from "./ProductBgImages";
import Section from "@/components/shared/section/Section";

interface ProductInfoProps {
  currentProduct: ProductItem;
}

export default function ProductInfo({ currentProduct }: ProductInfoProps) {
  const t = useTranslations();

  const { title, volume, trademark, category } = currentProduct;

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.products"), href: "/products" },
    {
      label:
        `${title} ${volume} ${t("productsPage.ml")} ${t(
          "productsPage.trademark"
        )} ${trademark.title}` || "",
      href: `/products/${trademark.id}-${category}-${volume}` || "",
    },
  ];

  return (
    <div className="relative aspect-[360/316] tab:aspect-[768/362] laptop:aspect-[1280/366]">
      <ProductBgImages />
      <Section>
        <Breadcrumbs crumbs={crumbs} />
      </Section>
    </div>
  );
}
