import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

interface IngredientItemProps {
  ingredient: string;
  className?: string;
}

export default function IngredientItem({
  ingredient,
  className = "",
}: IngredientItemProps) {
  const t = useTranslations("productPage");

  return (
    <li
      className={`flex flex-col justify-start items-center w-[87px] h-[90px] ${className}`}
    >
      <Image
        src={`/images/icons/ingredients/${ingredient}.svg`}
        alt={ingredient}
        width={50}
        height={50}
      />
      <p className="text-14reg text-center">{t(`ingredients.${ingredient}`)}</p>
    </li>
  );
}
