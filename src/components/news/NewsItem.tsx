import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

interface NewsItemProps {
  newsItem: {
    title: string;
    description: string;
    article: string;
  };
  className?: string;
}

export default function NewsItem({ newsItem, className = "" }: NewsItemProps) {
  const t = useTranslations();
  const locale = useLocale();

  const { title, description, article } = newsItem;

  return (
    <li className={`sm:flex justify-between w-full ${className}`}>
      <Image
        src={`/images/contentImages/homeNews/${article}.webp`}
        alt={article}
        width={1056}
        height={700}
        className="w-full sm:w-[50%] tab:w-[44.7%] lg:w-[48.9%] mb-6 sm:mb-0"
      />

      <div className="flex flex-col content-between sm:w-[47%] tab:w-[51.8%] lg:w-[48.9%] lg:pb-10">
        <h2 className="text-18med lg:text-24med">{title}</h2>
        <p className="mt-4 text-16reg lg:text-18reg line-clamp-4 lg:line-clamp-6 laptop:line-clamp-[7] 2xl:line-clamp-[10]">
          {description}
        </p>
        <Link
          href={`/news/${article}`}
          locale={locale}
          className="block mt-4 lg:mt-auto outline-none text-16med tab:text-18med text-greenDark laptop:hover:text-greenKhaki focus:text-greenKhaki 
        active:text-greenKhaki transition duration-300 
        ease-out"
        >
          {t("buttons.readMore")}
        </Link>
      </div>
    </li>
  );
}
