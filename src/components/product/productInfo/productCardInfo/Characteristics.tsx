import { useTranslations } from "next-intl";
import React from "react";

import { ProductItem } from "@/types/productItem";

interface CharacteristicsProps {
  currentProduct: ProductItem;
}

export default function Characteristics({
  currentProduct,
}: CharacteristicsProps) {
  const t = useTranslations("productPage");
  const { volume, energyValue } = currentProduct;
  const { kJ, kcal, protein, fat, carbohydrates, sugars, salt } = energyValue;

  return (
    <div className="mb-8 laptop:mb-10">
      <h3 className="mb-4 text-18med">{t("characteristics")}</h3>
      <ul className="flex gap-x-4 tab:gap-x-8 mb-8">
        <li>
          <p className="text-16med tab:text-18med text-center">
            {volume}&nbsp;{t("gram")}
          </p>
          <h4 className="text-12reg tab:text-14reg text-center text-darkGrey">
            {t("weight")}
          </h4>
        </li>
        <li>
          <p className="text-16med tab:text-18med text-center">
            {kJ}&nbsp;{t("kJ")}&nbsp;/&nbsp;{kcal}&nbsp;{t("kcal")}
          </p>
          <h4 className="text-12reg tab:text-14reg text-center text-darkGrey">
            {t("energyValues")}
          </h4>
        </li>
      </ul>
      <ul className="flex gap-x-4 tab:gap-x-8">
        <li>
          <p className="text-16med tab:text-18med text-center">{protein}</p>
          <h4 className="text-12reg tab:text-14reg text-center text-darkGrey">
            {t("protein")}
          </h4>
        </li>
        <li>
          <p className="text-16med tab:text-18med text-center">{fat}</p>
          <h4 className="text-12reg tab:text-14reg text-center text-darkGrey">
            {t("fat")}
          </h4>
        </li>
        <li>
          <p className="text-16med tab:text-18med text-center">
            {carbohydrates}
          </p>
          <h4 className="text-12reg tab:text-14reg text-center text-darkGrey">
            {t("carbohydrates")}
          </h4>
        </li>
        <li>
          <p className="text-16med tab:text-18med text-center">{sugars}</p>
          <h4 className="text-12reg tab:text-14reg text-center text-darkGrey">
            {t("sugars")}
          </h4>
        </li>
        <li>
          <p className="text-16med tab:text-18med text-center">{salt}</p>
          <h4 className="text-12reg tab:text-14reg text-center text-darkGrey">
            {t("salt")}
          </h4>
        </li>
      </ul>
    </div>
  );
}
