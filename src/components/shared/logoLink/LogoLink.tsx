import Image from "next/image";
import { useLocale } from "next-intl";
import React from "react";

import { Link } from "@/i18n/routing";

interface LogoLinkProps {
  className: string;
}

export default function LogoLink({ className = "" }: LogoLinkProps) {
  const locale = useLocale();

  return (
    <Link href="/" locale={locale} className="outline-none">
      <Image
        src="/images/icons/logo.svg"
        alt="logo"
        width="204"
        height="53"
        className={` ${className}`}
      />
    </Link>
  );
}
