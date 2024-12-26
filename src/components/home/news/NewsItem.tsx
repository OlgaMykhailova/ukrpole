import Subtitle from "@/components/shared/titles/Subtitle";
import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

interface NewsItemProps {
  newsItem: {
    title: string;
    description: string;
    id: string;
  };
  className?: string;
}

export default function NewsItem({ newsItem, className = "" }: NewsItemProps) {
  const t = useTranslations();
  const locale = useLocale();

  const { title, description, id } = newsItem;

  return (
    <li className={`w-full tab:w-[46.6%] laptop:w-[48.9%] ${className}`}>
      <Link href={`/news/${id}`} locale={locale} className="outline-none">
        <Image
          src={`/images/contentImages/homeNews/${id}.webp`}
          alt={id}
          width={1056}
          height={700}
          className="mb-6"
        />

        <Subtitle>{title}</Subtitle>
      </Link>
      <p className="mt-4 line-clamp-4 laptop:line-clamp-3">{description}</p>
      <Link
        href={`/news/${id}`}
        locale={locale}
        className="block mt-4 outline-none text-16med tab:text-18med text-greenDark laptop:hover:text-greenKhaki focus:text-greenKhaki 
        active:text-greenKhaki transition duration-300 
        ease-out"
      >
        {t("buttons.readMore")}
      </Link>
    </li>
  );
}
