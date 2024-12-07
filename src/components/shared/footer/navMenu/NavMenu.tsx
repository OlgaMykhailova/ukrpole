import React from "react";
import MenuLink from "./MenuLink";
import { useTranslations } from "next-intl";

export default function NavMenu() {
  const t = useTranslations();

  const menuList = [
    { title: t("aboutPage.title"), path: "about" },
    { title: t("productsPage.title"), path: "products" },
    { title: t("cooperationPage.title"), path: "cooperation" },
    { title: t("newsPage.title"), path: "news" },
    { title: t("contactsPage.title"), path: "contacts" },
  ];

  return (
    <nav className="flex justify-center laptop:justify-normal">
      <ul className="flex flex-col tab:flex-row gap-4 tab:gap-8">
        {menuList.map((menuItem, idx) => (
          <MenuLink key={idx} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  );
}
