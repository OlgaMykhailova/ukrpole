import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ProductItem } from "@/types/productItem";
import { useLocale, useTranslations } from "next-intl";

interface NavigationItemProps {
  product: ProductItem;
  currentProduct: ProductItem;
}

export default function NavigationItem({
  product,
  currentProduct,
}: NavigationItemProps) {
  const locale = useLocale();
  const t = useTranslations();
  const { title, trademark, category, volume } = product;

  return (
    <li className="flex justify-center items-center w-[70px] tab:w-[103px] h-auto">
      <Link
        href={`/products/${trademark.id}-${category}-${volume}`}
        locale={locale}
        className="group outline-none"
      >
        <Image
          src={`/images/contentImages/products/${trademark.id}-${category}-${volume}.webp`}
          alt={title}
          width={968}
          height={1152}
          className={`w-[54px] tab:w-[67px] h-auto mx-auto mb-1 group-active:scale-95 group-focus:scale-105 laptop:group-hover:scale-105 transition duration-[1000ms] ease-out ${
            volume === currentProduct.volume &&
            trademark.id === currentProduct.trademark.id
              ? ""
              : "grayscale"
          }`}
        />
        <div className="relative flex items-center w-[70px] tab:w-[101px] aspect-[162/50]">
          <p className="text-14reg tab:text-18med text-center mx-auto">
            {volume}&nbsp;{t("productsPage.ml")}
          </p>
          <Image
            src="/images/icons/strokeEllipse.svg"
            alt="stroke ellipse"
            width={162}
            height={50}
            className={`absolute top-0 left-0 w-full h-auto laptop:group-hover:opacity-100 group-focus:opacity-100 
                                          transition duration-300 ease-out ${
                                            volume === currentProduct.volume &&
                                            trademark.id ===
                                              currentProduct.trademark.id
                                              ? "opacity-100"
                                              : "opacity-0"
                                          }`}
          />
        </div>
      </Link>
    </li>
  );
}
