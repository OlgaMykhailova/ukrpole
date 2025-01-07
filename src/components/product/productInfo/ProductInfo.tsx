import React from "react";
import { useTranslations } from "next-intl";
import { ProductItem } from "@/types/productItem";
import ProductBgImages from "./ProductBgImages";
import Section from "@/components/shared/section/Section";
import Image from "next/image";
import Button from "@/components/shared/buttons/Button";

interface ProductInfoProps {
  currentProduct: ProductItem;
}

export default function ProductInfo({ currentProduct }: ProductInfoProps) {
  const t = useTranslations();

  const { title, volume, trademark, category, description } = currentProduct;

  const productTitle =
    `${title} ${volume} ${t("productsPage.ml")} ${t(
      "productsPage.trademark"
    )} ${trademark.title}` || "";

  return (
    <div className="relative aspect-[360/171] tab:aspect-[768/209] laptop:aspect-[1280/261]">
      <ProductBgImages />
      <Section className="laptop:flex justify-between">
        <div className="laptop:w-[46.8%]">
          <Image
            src={`/images/contentImages/products/${trademark.id}-${category}-${volume}.webp`}
            alt={title}
            width={968}
            height={1152}
            className="w-[63.4%] tab:w-[44%] laptop:w-[356px] h-auto mx-auto laptop:group-hover:scale-105 transition duration-[2000ms] ease-out"
          />
        </div>
        <div className="laptop:w-[49.2%]">
          <h1 className="mb-4 text-24med">{productTitle}</h1>
          <p className="mb-6 text-darkGrey">{description}</p>
          <h3 className="mb-6 text-18med">
            {t("productPage.characteristics")}
          </h3>
          <h3 className="mb-10 text-18med">{t("productPage.ingredients")}</h3>
          <Button>{t("buttons.makeDelivery")}</Button>
        </div>
      </Section>
    </div>
  );
}
