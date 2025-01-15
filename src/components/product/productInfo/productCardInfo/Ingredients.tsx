import { useTranslations } from "next-intl";
import React from "react";

import IngredientItem from "./IngredientItem";

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
          <IngredientItem
            key={idx}
            ingredient={ingredient}
            className={idx === ingredients.length - 1 ? "mr-auto" : ""}
          />
        ))}
      </ul>
    </div>
  );
}
