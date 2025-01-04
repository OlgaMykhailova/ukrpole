export interface ProductItem {
  id: "tomatoes" | "cucumbers" | "peppers" | "assorted";
  trademark: {
    id: "bataljon" | "ukrpole";
    title: "Укрполе" | "Батальйон Смаку";
  };
  title: "Томати" | "Огірки" | "Перець" | "Асорті огірки та томатів";
  volume: string;
}
