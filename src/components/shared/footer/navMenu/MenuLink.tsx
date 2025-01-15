import { useLocale } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

interface MenuLinkProps {
  menuItem: {
    title: string;
    path: string;
  };
  className: string;
}

export default function MenuLink({ menuItem, className }: MenuLinkProps) {
  const locale = useLocale();
  const { title, path } = menuItem;

  return (
    <li className={`text-center ${className}`}>
      <Link
        href={`/${path}`}
        locale={locale}
        className="text-18med transition duration-300 ease-out active:text-greenDark focus-visible:text-greenDark
         laptop:hover:text-greenDark outline-none"
      >
        {title}
      </Link>
    </li>
  );
}
