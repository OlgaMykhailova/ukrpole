import { TabType } from "./tab";

export interface ProductItem {
  category: TabType;
  trademark: {
    id: "bataljon" | "ukrpole";
    title: "Укрполе" | "Батальйон Смаку";
  };
  title: "Томати" | "Огірки" | "Перець" | "Асорті огірки та томатів";
  volume: string;
}
