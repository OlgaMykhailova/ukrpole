import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import TextButton from "../shared/buttons/TextButton";
import NewItemImage from "./NewItemImage";

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

  const sectionId = `news-page-${id}`;

  return (
    <li
      id={sectionId}
      className={`sm:flex justify-between w-full ${className}`}
    >
      <NewItemImage id={id} sectionId={sectionId} />
      <div className="flex flex-col content-between sm:w-[47%] tab:w-[51.8%] lg:w-[48.9%] lg:pb-10">
        <Link href={`/news/${id}`} locale={locale} className="outline-none">
          <h2 className="text-18med lg:text-24med">{title}</h2>
        </Link>
        <p className="mt-4 text-16reg lg:text-18reg line-clamp-4 lg:line-clamp-6 laptop:line-clamp-[7] 2xl:line-clamp-[10]">
          {description}
        </p>
        <Link
          href={`/news/${id}`}
          locale={locale}
          className="block mt-4 lg:mt-auto outline-none"
        >
          <TextButton>{t("buttons.readMore")}</TextButton>
        </Link>
      </div>
    </li>
  );
}
