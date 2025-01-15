import { useLocale,useTranslations } from "next-intl";
import React from "react";

import Button from "@/components/shared/buttons/Button";
import { Link } from "@/i18n/routing";
import { ProductItem } from "@/types/productItem";

import Characteristics from "./Characteristics";
import Ingredients from "./Ingredients";

interface ProductCardInfoProps {
  currentProduct: ProductItem;
}

export default function ProductCardInfo({
  currentProduct,
}: ProductCardInfoProps) {
  const t = useTranslations();
  const locale = useLocale();
  const { title, volume, trademark, description, ingredients } = currentProduct;

  const productTitle =
    `${title} ${volume} ${t("productsPage.ml")} ${t(
      "productsPage.trademark"
    )} ${trademark.title}` || "";

  return (
    <div className="laptop:w-[49.2%]">
      <h1 className="mb-4 tab:mb-6 laptop:mb-10 text-24med">{productTitle}</h1>
      <p className="mb-8 laptop:mb-10 text-darkGrey">{description}</p>
      <Characteristics currentProduct={currentProduct} />
      <Ingredients ingredients={ingredients} />
      <div className="flex justify-center tab:justify-start">
        <Link href="/contacts" locale={locale} className="group outline-none">
          <Button>{t("buttons.makeDelivery")}</Button>
        </Link>
      </div>
    </div>
  );
}
