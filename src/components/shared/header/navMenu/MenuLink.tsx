import Link from "next/link";
import { useLocale } from "next-intl";
import React from "react";

interface MenuLinkProps {
  menuItem: {
    title: string;
    path: string;
  };
}

export default function MenuLink({ menuItem }: MenuLinkProps) {
  const locale = useLocale();
  const { title, path } = menuItem;

  return (
    <li className="text-center">
      <Link
        href={`/${path}`}
        locale={locale}
        className="text-24med laptop:text-18med transition duration-300 ease-out active:text-greenDark focus-visible:text-greenDark
         laptop:hover:text-greenDark outline-none"
      >
        {title}
      </Link>
    </li>
  );
}
