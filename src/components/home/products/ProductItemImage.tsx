"use client";
import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useLocale } from "next-intl";
import { TabMenuItem } from "@/types/tabMenuItem";
import { useOnScreen } from "@/hooks/useOnScreen";

interface ProductItemImageProps {
  activeTabData: TabMenuItem;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  sectionId: string;
}

export default function ProductItemImage({
  activeTabData,
  onClick,
  sectionId,
}: ProductItemImageProps) {
  const locale = useLocale();
  const { isVisible } = useOnScreen(sectionId);
  const { id, label } = activeTabData;

  return (
    <Link
      href={`/products`}
      onClick={onClick}
      locale={locale}
      className="outline-none"
    >
      <Image
        src={`/images/contentImages/homeProducts/${id}.webp`}
        alt={label}
        width={1756}
        height={740}
        className={`w-full h-auto max-w-[878px] mx-auto laptop:hover:scale-105 transition duration-[1500ms] ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-90"
        }`}
      />
    </Link>
  );
}
