import Subtitle from "@/components/shared/titles/Subtitle";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import TextButton from "@/components/shared/buttons/TextButton";
import NewsItemImage from "./NewsItemImage";

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

  const sectionId = `home-page-news-${id}`;

  return (
    <li
      id={sectionId}
      className={`w-full tab:w-[46.6%] laptop:w-[48.9%] ${className}`}
    >
      <Link href={`/news/${id}`} locale={locale} className="outline-none">
        <NewsItemImage sectionId={sectionId} id={id} />
        <Subtitle>{title}</Subtitle>
      </Link>
      <p className="mt-4 line-clamp-4 laptop:line-clamp-3">{description}</p>
      <Link
        href={`/news/${id}`}
        locale={locale}
        className="block mt-4 outline-none"
      >
        <TextButton>{t("buttons.readMore")}</TextButton>
      </Link>
    </li>
  );
}
