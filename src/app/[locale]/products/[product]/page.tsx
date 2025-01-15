import { useTranslations } from "next-intl";
import React from "react";

import ProductCard from "@/components/product/productInfo/ProductCard";
import SimilarProducts from "@/components/product/similarProducts/SimilarProducts";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { productsList } from "@/mockedData/products";
import { Locale } from "@/types/locale";
import { ProductItem } from "@/types/productItem";

import NotFound from "../../not-found";

export default function ProductPage({
  params,
}: {
  params: {
    product: string;
    locale: Locale;
  };
}) {
  const t = useTranslations();
  const { product, locale } = params;

  const currentProduct = productsList[locale]?.find(
    ({ trademark, category, volume }) =>
      `${trademark.id}-${category}-${volume}` === product
  ) as ProductItem | undefined;

  if (!currentProduct) {
    return <NotFound />;
  }

  const { title, volume, trademark, category } = currentProduct;

  const productTitle =
    `${title} ${volume} ${t("productsPage.ml")} ${t(
      "productsPage.trademark"
    )} ${trademark.title}` || "";

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.products"), href: "/products" },
    {
      label: productTitle,
      href: `/products/${trademark.id}-${category}-${volume}` || "",
    },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} className="bg-beige" />
      <ProductCard currentProduct={currentProduct} />
      <SimilarProducts currentProduct={currentProduct} />
    </>
  );
}
