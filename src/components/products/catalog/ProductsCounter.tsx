import { useTranslations } from "next-intl";
import React from "react";

import { ProductItem } from "@/types/productItem";
import { TabType } from "@/types/tab";

interface ProductsCounterProps {
  filterBy: TabType | "all";
  filteredProducts: ProductItem[];
}

export default function ProductsCounter({
  filterBy,
  filteredProducts,
}: ProductsCounterProps) {
  const t = useTranslations();

  return (
    <p>
      {t("productsPage.productsFromCategory")}&ensp;&quot;
      {t(`homePage.products.${filterBy}.subtitle`)}&quot;:
      <span className="text-16med laptop:text-18med">
        &ensp;{filteredProducts.length}&nbsp;{t("productsPage.pieces")}
      </span>
    </p>
  );
}
