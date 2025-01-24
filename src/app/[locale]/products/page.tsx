import React from "react";

import Catalog from "@/components/products/catalog/Catalog";
import Hero from "@/components/products/hero/Hero";
import { Locale } from "@/types/locale";
import { generatePageMetaData } from "@/utils/generatePageMetaData";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return generatePageMetaData({
    locale,
    namespace: "metadata",
    canonical: "/products",
  });
}

export default function ProductsPage() {
  return (
    <>
      <Hero />
      <Catalog />
    </>
  );
}
