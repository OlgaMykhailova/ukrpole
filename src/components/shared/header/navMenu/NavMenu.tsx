import React from "react";
import MenuLink from "./MenuLink";
import { useTranslations } from "next-intl";

interface NavMenuProps {
  isAtTop?: boolean;
}

export default function NavMenu({ isAtTop }: NavMenuProps) {
  const t = useTranslations();

  const menuList = [
    { title: t("aboutPage.title"), path: "about" },
    { title: t("productsPage.title"), path: "products" },
    { title: t("cooperationPage.title"), path: "cooperation" },
    { title: t("newsPage.title"), path: "news" },
    { title: t("contactsPage.title"), path: "contacts" },
  ];

  return (
    <nav
      className={`relative laptop:-z-20 container flex justify-center items-center max-w-[1720px] transition-all duration-500 ease-out ${
        isAtTop
          ? "laptop:top-0 laptop:h-[58px]"
          : "laptop:-top-[102px] laptop:h-[72px]"
      }`}
    >
      <ul
        className={`flex flex-col laptop:inline-flex laptop:flex-row gap-8 laptop:gap-6 laptop:py-4 laptop:border-t transition duration-500 ease-out ${
          isAtTop ? "border-greenKhaki" : "border-transparent"
        } `}
      >
        {menuList.map((menuItem, idx) => (
          <MenuLink
            key={idx}
            menuItem={menuItem}
            className={`transition-transform duration-500 ${
              isAtTop
                ? "laptop:translate-x-0"
                : idx < 2
                ? "laptop:-translate-x-[70px]"
                : idx >= 2
                ? "laptop:translate-x-[120px]"
                : ""
            }`}
          />
        ))}
      </ul>
    </nav>
  );
}
