import { ProductItem } from "@/types/productItem";
import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { productsList } from "@/mockedData/products";
import { Locale } from "@/types/locale";

interface NavigationByVolumeProps {
  currentProduct: ProductItem;
}

export default function NavigationByVolume({
  currentProduct,
}: NavigationByVolumeProps) {
  const locale = useLocale();
  const t = useTranslations();

  const localizedProductsList = productsList[locale as Locale] as ProductItem[];

  const filteredProducts = localizedProductsList.filter(
    (product) => product.category === currentProduct.category
  );

  return (
    <ul className="flex flex-wrap gap-4 tab:gap-x-6 justify-center mt-6 tab:mt-8 laptop:mt-10">
      {filteredProducts.map(({ title, trademark, category, volume }, idx) => (
        <li
          key={idx}
          className="flex justify-center items-center w-[70px] h-[101px] tab:w-[103px] tab:h-[134px]"
        >
          <Link
            href={`/products/${trademark.id}-${category}-${volume}`}
            locale={locale}
          >
            <Image
              src={`/images/contentImages/products/${trademark.id}-${category}-${volume}.webp`}
              alt={title}
              width={968}
              height={1152}
              className={`w-[67px] h-auto mx-auto mb-1 ${
                volume === currentProduct.volume &&
                trademark.id === currentProduct.trademark.id
                  ? ""
                  : "grayscale"
              }`}
            />
            <div className="relative flex items-center w-[70px] tab:w-[101px] aspect-[103/49]">
              <p className="text-14reg tab:text-18med text-center mx-auto">
                {volume}&nbsp;{t("productsPage.ml")}
              </p>
              <Image
                src="/images/icons/strokeEllipse.svg"
                alt="stroke ellipse"
                width={103}
                height={49}
                className={`absolute top-0 left-0 w-full h-auto laptop:group-hover:opacity-100 laptop:group-focus:opacity-100 
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
      ))}
    </ul>
  );
}
