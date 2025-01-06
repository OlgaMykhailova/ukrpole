import React from "react";
import { useTranslations } from "next-intl";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { ProductItem } from "@/types/productItem";
import ProductBgImages from "./ProductBgImages";
import Section from "@/components/shared/section/Section";
import Image from "next/image";

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
        <Image
          src={`/images/contentImages/products/${trademark.id}-${category}-${volume}.webp`}
          alt={title}
          width={968}
          height={1152}
          className="w-[63.4%] tab:w-[44%] laptop:[44.8%] h-auto mx-auto laptop:group-hover:scale-105 transition duration-[2000ms] ease-out"
        />
      </Section>
    </div>
  );
}
