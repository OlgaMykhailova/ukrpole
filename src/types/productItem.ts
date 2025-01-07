import { TabType } from "./tab";

export interface ProductItem {
  category: TabType;
  trademark: {
    id: "bataljon" | "ukrpole";
    title: "Укрполе" | "Батальйон Смаку";
  };
  title: "Томати" | "Огірки" | "Перець" | "Асорті огірків та томатів";
  volume: string;
  description: string;
  energyValue: {
    kJ: string;
    kcal: string;
    protein: string;
    fat: string;
    carbohydrates: string;
    sugars: string;
    salt: string;
  };
  ingredients: string[];
}
