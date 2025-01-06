import React from "react";
import Image from "next/image";
import { ProductItem } from "@/types/productItem";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

interface CatalogCardProps {
  product: ProductItem;
  className?: string;
}

export default function CatalogCard({
  product,
  className = "",
}: CatalogCardProps) {
  const t = useTranslations("productsPage");
  const locale = useLocale();
  const { category, trademark, title, volume } = product;

  return (
    <li className={`relative flex flex-col items-center ${className}`}>
      <Link
        href={`/products/${trademark.id}-${category}-${volume}`}
        locale={locale}
        className="group outline-none"
      >
        <div className="flex flex-col items-center justify-end w-full aspect-[156/168]">
          <Image
            src={`/images/backgrounds/productsCatalog/productCardBg.svg`}
            alt={title}
            width="156"
            height="155"
            className="absolute -z-20 top-0 left-0 w-full h-auto"
          />
          <Image
            src={`/images/backgrounds/productsCatalog/${category}Bg.webp`}
            alt={title}
            width="688"
            height="682"
            className="absolute -z-10 top-0 left-0 w-full h-auto scale-95 translate-y-[5%] opacity-0 laptop:group-hover:translate-y-0 laptop:group-hover:opacity-100 laptop:group-hover:scale-100 transition duration-[2000ms] ease-out"
          />
          <Image
            src={`/images/contentImages/products/${trademark.id}-${category}-${volume}.webp`}
            alt={title}
            width={968}
            height={1152}
            className="w-[62.2%] h-auto laptop:group-hover:scale-105 transition duration-[2000ms] ease-out"
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
      </Link>
    </li>
  );
}
