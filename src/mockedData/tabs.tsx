import { useTranslations } from "next-intl";
import { TabMenuItem } from "@/types/tabMenuItem";

export const Tabs = () => {
  const t = useTranslations("homePage.products");

  const tabs: TabMenuItem[] = [
    {
      id: "tomatoes",
      imageAlt: "tomato",
      label: t("tomatoes.subtitle"),
      description: t("tomatoes.description"),
    },
    {
      id: "cucumbers",
      imageAlt: "cucumber",
      label: t("cucumbers.subtitle"),
      description: t("cucumbers.description"),
    },
    {
      id: "assorted",
      imageAlt: "tomato and cucumber",
      label: t("assorted.subtitle"),
      description: t("assorted.description"),
    },
    {
      id: "peppers",
      imageAlt: "pepper",
      label: t("peppers.subtitle"),
      description: t("peppers.description"),
    },
  ];
  return tabs;
};
