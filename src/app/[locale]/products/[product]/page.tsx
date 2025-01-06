import React from "react";
import { Locale } from "@/types/locale";
import { productsList } from "@/mockedData/products";
import NotFound from "../../not-found";
import SimilarProducts from "@/components/product/similarProducts/SimilarProducts";
import { ProductItem } from "@/types/productItem";
import ProductInfo from "@/components/product/productInfo/ProductInfo";

export default function ProductPage({
  params,
}: {
  params: {
    product: string;
    locale: Locale;
  };
}) {
  const { product, locale } = params;

  const currentProduct = productsList[locale]?.find(
    ({ trademark, category, volume }) =>
      `${trademark.id}-${category}-${volume}` === product
  ) as ProductItem | undefined;

  if (!currentProduct) {
    return <NotFound />;
  }

  return (
    <>
      <ProductInfo currentProduct={currentProduct} />
      <SimilarProducts currentProduct={currentProduct} />
    </>
  );
}
