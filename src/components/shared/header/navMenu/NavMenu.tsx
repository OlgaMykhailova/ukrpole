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
    <nav className="container flex justify-center max-w-[1720px]">
      <ul className="flex flex-col laptop:inline-flex laptop:flex-row gap-8 laptop:gap-6 laptop:py-4 laptop:border-t border-greenKhaki">
        {menuList.map((menuItem, idx) => (
          <MenuLink key={idx} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  );
}
