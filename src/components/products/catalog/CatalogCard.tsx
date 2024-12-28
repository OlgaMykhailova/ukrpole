import React from "react";
import Image from "next/image";
import { ProductItem } from "@/types/productItem";
import { useTranslations } from "next-intl";

interface CatalogCardProps {
  product: ProductItem;
}

export default function CatalogCard({ product }: CatalogCardProps) {
  const t = useTranslations("productsPage");
  const { id, trademark, title, volume } = product;

  return (
    <li className="relative flex flex-col items-center w-[47.6%] tab:w-[48.9%] laptop:w-[31.9%]">
      <div className="flex flex-col items-center justify-end w-full aspect-[156/168]">
        <Image
          src={`/images/backgrounds/productsCatalog/productCardBg.svg`}
          alt={title}
          width="156"
          height="155"
          className="absolute -z-10 top-0 left-0 w-full h-auto"
        />
        <Image
          src={`/images/contentImages/products/${trademark.id}-${id}-${volume}.webp`}
          alt={title}
          width={968}
          height={1152}
          className="w-[62.2%] h-auto"
        />
      </div>
      <h3 className="mt-4 text-16med tab:text-24med text-center">{title}</h3>
      <p className="text-16med tab:text-24med text-greenDark text-center">
        {volume}&nbsp;
        {t("ml")}
      </p>
      <p className="text-14reg tab:text-18reg text-center">
        {t("trademark")}&nbsp;{trademark.title}
      </p>
    </li>
  );
}
