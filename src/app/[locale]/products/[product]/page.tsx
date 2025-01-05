import React from "react";
import { useTranslations } from "next-intl";
import Breadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { Locale } from "@/types/locale";
import { productsList } from "@/mockedData/products";
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
    ({ trademark, id, volume }) => `${trademark.id}-${id}-${volume}` === product
  );

  if (!currentProduct) {
    return <NotFound />;
  }

  const { title, volume, trademark, id } = currentProduct;

  const crumbs = [
    { label: t("breadcrumbs.home"), href: "/" },
    { label: t("breadcrumbs.products"), href: "/products" },
    {
      label:
        `${title} ${volume} ${t("productsPage.ml")} ${t(
          "productsPage.trademark"
        )} ${trademark.title}` || "",
      href: `/products/${trademark.id}-${id}-${volume}` || "",
    },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
    </>
  );
}
