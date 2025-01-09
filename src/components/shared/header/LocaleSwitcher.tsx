"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { Locale } from "@/types/locale";

interface LocaleSwitcherProps {
  locale: Locale;
  className?: string;
}

export default function LocaleSwitcher({
  locale,
  className = "",
}: LocaleSwitcherProps) {
  const locales = routing.locales;
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLocaleChange = (newLocale: Locale) => {
    const hash = window.location.hash;

    const newPath = `${pathName}${hash}?${searchParams.toString()}`;

    router.push(newPath, { locale: newLocale });
  };

  return (
    <ul className="flex gap-2 laptop:gap-3">
      {locales.map((curLocale) => (
        <li key={curLocale}>
          <button
            onClick={() => handleLocaleChange(curLocale)}
            className={`outline-none text-18med laptop:hover:text-greenDark focus-visible:text-greenDark active:text-greenDark transition duration-300 ease-out ${
              curLocale === locale ? "text-greenDark" : "text-black"
            } ${className}`}
          >
            {curLocale === "uk" ? "ua" : curLocale}
          </button>
        </li>
      ))}
    </ul>
  );
}
