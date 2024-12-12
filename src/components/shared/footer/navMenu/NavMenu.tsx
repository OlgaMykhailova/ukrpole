"use client";
import React from "react";
import MenuLink from "./MenuLink";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";

export default function NavMenu() {
  const t = useTranslations();

  const currentPath = usePathname().slice(1);

  const menuList = [
    { title: t("navMenu.about"), path: "about" },
    { title: t("navMenu.products"), path: "products" },
    { title: t("navMenu.cooperation"), path: "cooperation" },
    { title: t("navMenu.news"), path: "news" },
    { title: t("navMenu.contacts"), path: "contacts" },
  ];

  return (
    <nav className="flex justify-center laptop:justify-normal">
      <ul className="flex flex-col tab:flex-row gap-4 tab:gap-8">
        {menuList.map((menuItem, idx) => (
          <MenuLink
            key={idx}
            menuItem={menuItem}
            className={`${
              currentPath === menuItem.path ? "text-greenDark" : ""
            }`}
          />
        ))}
      </ul>
    </nav>
  );
}
