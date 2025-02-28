"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import React from "react";

import { useOnScreen } from "@/hooks/useOnScreen";
import { Link } from "@/i18n/routing";

interface NewsItemImageProps {
  id: string;
  sectionId: string;
}

export default function NewsItemImage({ id, sectionId }: NewsItemImageProps) {
  const locale = useLocale();
  const { isVisible } = useOnScreen(sectionId);

  return (
    <Link
      href={`/news/${id}`}
      locale={locale}
      className="relative flex flex-col justify-end w-full sm:w-[50%] tab:w-[44.7%] lg:w-[48.9%] aspect-[1056/701] mb-6 sm:mb-0 outline-none overflow-hidden"
    >
      <Image
        src={`/images/contentImages/homeNews/${id}.webp`}
        alt={id}
        width={1056}
        height={701}
        priority={id === "cooperation"}
        className={`absolute top-0 left-0 -z-10 ${
          isVisible ? "scale-100" : "scale-[115%]"
        } transition duration-1000 ease-out`}
      />
      <Image
        src={`/images/backgrounds/homeNews/curveFigure.svg`}
        alt={id}
        width="528"
        height="82"
        className={`w-full`}
      />
    </Link>
  );
}
