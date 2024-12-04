import Image from "next/image";
import { useLocale } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

export default function LogoLink() {
  const locale = useLocale();

  return (
    <Link href="/" locale={locale} className="outline-none">
      <Image
        src="/images/icons/logo.svg"
        alt="logo"
        width="204"
        height="53"
        className="w-[124px] h-8 tab:w-[162px] tab:h-[42px] laptop:w-[204px] laptop:h-[53px]"
      />
    </Link>
  );
}
