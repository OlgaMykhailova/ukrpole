import { ProductItem } from "@/types/productItem";
import React from "react";
import Button from "@/components/shared/buttons/Button";
import Ingredients from "./Ingredients";
import Characteristics from "./Characteristics";
import { useTranslations } from "next-intl";

interface ProductCardInfoProps {
  currentProduct: ProductItem;
}

export default function ProductCardInfo({
  currentProduct,
}: ProductCardInfoProps) {
  const t = useTranslations();
  const { title, volume, trademark, description, ingredients } = currentProduct;

  const productTitle =
    `${title} ${volume} ${t("productsPage.ml")} ${t(
      "productsPage.trademark"
    )} ${trademark.title}` || "";

  return (
    <div className="laptop:w-[49.2%]">
      <h1 className="mb-4 tab:mb-6 laptop:mb-10 text-24med">{productTitle}</h1>
      <p className="mb-6 tab:mb-8 laptop:mb-10 text-darkGrey">{description}</p>
      <Characteristics currentProduct={currentProduct} />
      <Ingredients ingredients={ingredients} />
      <Button>{t("buttons.makeDelivery")}</Button>
    </div>
  );
}
