import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface IngredientsProps {
  ingredients: string[];
}

export default function Ingredients({ ingredients }: IngredientsProps) {
  const t = useTranslations("productPage");

  return (
    <div className="mb-10">
      <h3 className="mb-4 text-18med">{t("ingredientsTitle")}</h3>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 tab:gap-y-4">
        {ingredients?.map((ingredient, idx) => (
          <li
            key={idx}
            className={`flex flex-col justify-start items-center w-[87px] h-[90px] ${
              idx === ingredients.length - 1 ? "mr-auto" : ""
            }`}
          >
            <Image
              src={`/images/icons/ingredients/${ingredient}.svg`}
              alt={ingredient}
              width={50}
              height={50}
            />
            <p className="text-14reg text-center">
              {t(`ingredients.${ingredient}`)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
