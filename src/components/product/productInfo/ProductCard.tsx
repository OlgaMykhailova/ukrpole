import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { ProductItem } from "@/types/productItem";
import ProductBgImages from "./ProductBgImages";
import Image from "next/image";
import Button from "@/components/shared/buttons/Button";
import Ingredients from "./Ingredients";
import Characteristics from "./Characteristics";
import { productsList } from "@/mockedData/products";
import { Locale } from "@/types/locale";

interface ProductInfoProps {
  currentProduct: ProductItem;
}

export default function ProductCard({ currentProduct }: ProductInfoProps) {
  const t = useTranslations();
  const locale = useLocale();

  const { title, volume, trademark, category, description, ingredients } =
    currentProduct;

  const localizedProductsList = productsList[locale as Locale] as ProductItem[];

  const filteredProducts = localizedProductsList.filter(
    (product) => product.category === category
  );

  console.log(filteredProducts);

  const productTitle =
    `${title} ${volume} ${t("productsPage.ml")} ${t(
      "productsPage.trademark"
    )} ${trademark.title}` || "";

  return (
    <div className="relative aspect-[360/171] tab:aspect-[768/209] laptop:aspect-[1280/261]">
      <ProductBgImages />
      <section className="container laptop:flex justify-between max-w-[1920px] pb-20 tab:pb-[100px] scroll-mt-[92px]">
        <div className="laptop:w-[46.8%] mb-12 laptop:mb-0">
          <Image
            src={`/images/contentImages/products/${trademark.id}-${category}-${volume}.webp`}
            alt={title}
            width={968}
            height={1152}
            className="w-[63.4%] tab:w-[44%] laptop:w-[73.6%] h-auto mx-auto laptop:group-hover:scale-105 transition duration-[2000ms] ease-out"
          />
          <ul className="flex flex-wrap gap-4 tab:gap-6 justify-center mt-6 tab:mt-8 laptop:mt-10">
            {filteredProducts.map(
              ({ title, trademark, category, volume }, idx) => (
                <li key={idx}>
                  <Image
                    src={`/images/contentImages/products/${trademark.id}-${category}-${volume}.webp`}
                    alt={title}
                    width={968}
                    height={1152}
                    className={`w-[67px] h-auto ${
                      volume === currentProduct.volume &&
                      trademark.id === currentProduct.trademark.id
                        ? ""
                        : "grayscale"
                    }`}
                  />
                  <p className="text-14reg tab:text-18med text-center">
                    {volume}&nbsp;{t("productsPage.ml")}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="laptop:w-[49.2%]">
          <h1 className="mb-4 tab:mb-6 laptop:mb-10 text-24med">
            {productTitle}
          </h1>
          <p className="mb-6 tab:mb-8 laptop:mb-10 text-darkGrey">
            {description}
          </p>
          <Characteristics currentProduct={currentProduct} />
          <Ingredients ingredients={ingredients} />
          <Button>{t("buttons.makeDelivery")}</Button>
        </div>
      </section>
    </div>
  );
}
