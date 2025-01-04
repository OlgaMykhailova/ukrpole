import { Link } from "@/i18n/routing";
import { TabMenuItem } from "@/types/tabMenuItem";
import Image from "next/image";
import React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

interface ProductItemProps {
  activeTabData: TabMenuItem;
}

export default function ProductItem({ activeTabData }: ProductItemProps) {
  const locale = useLocale();
  const router = useRouter();
  const { id, label, description } = activeTabData;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(`/products?category=${id}&page=1#catalog`);
  };

  return (
    <div>
      <Link
        href={`/products`}
        onClick={handleClick}
        locale={locale}
        className="outline-none"
      >
        <Image
          src={`/images/contentImages/homeProducts/${id}.webp`}
          alt={label}
          width={1756}
          height={740}
          className="w-full h-auto max-w-[878px] mx-auto laptop:hover:scale-105 transition duration-[2000ms] ease-out"
        />
      </Link>
      <p className="w-full max-w-[380px] tab:max-w-[746px] h-[134px] tab:h-auto mx-auto mt-4 tab:mt-6 text-center">
        {description}
      </p>
    </div>
  );
}
