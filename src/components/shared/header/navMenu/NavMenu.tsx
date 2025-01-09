"use client";
import React, { Dispatch, SetStateAction } from "react";
import MenuLink from "./MenuLink";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";

interface NavMenuProps {
  isAtTop?: boolean;
  setIsHeaderMenuOpened?: Dispatch<SetStateAction<boolean>> | undefined;
}

export default function NavMenu({
  isAtTop,
  setIsHeaderMenuOpened,
}: NavMenuProps) {
  const t = useTranslations();
  const locale = useLocale();

  const currentPath = usePathname().slice(1);

  const menuList = [
    { title: t("navMenu.about"), path: "about" },
    { title: t("navMenu.products"), path: "products" },
    { title: t("navMenu.cooperation"), path: "cooperation" },
    { title: t("navMenu.news"), path: "news" },
    { title: t("navMenu.contacts"), path: "contacts" },
  ];

  return (
    <nav
      className={`relative laptop:-z-10 container flex justify-center items-center max-w-[1920px] transition-all duration-500 ease-out ${
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
            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            className={`transition-transform duration-500 ${
              isAtTop
                ? "laptop:translate-x-0"
                : locale === "en"
                ? idx < 2
                  ? "laptop:-translate-x-[45px]"
                  : "laptop:translate-x-[145px]"
                : idx < 2
                ? "laptop:-translate-x-[70px]"
                : "laptop:translate-x-[120px]"
            } ${currentPath === menuItem.path ? "text-greenDark" : ""}`}
          />
        ))}
      </ul>
    </nav>
  );
}
