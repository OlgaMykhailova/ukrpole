import { useRouter } from "next/navigation";
import React from "react";

import { TabMenuItem } from "@/types/tabMenuItem";

import ProductItemImage from "./ProductItemImage";

interface ProductItemProps {
  activeTabData: TabMenuItem;
}

export default function ProductItem({ activeTabData }: ProductItemProps) {
  const router = useRouter();
  const { id, description } = activeTabData;
  const sectionId = `home-page-products-${id}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(`/products?category=${id}&page=1#catalog`);
  };

  return (
    <div id={sectionId}>
      <ProductItemImage
        activeTabData={activeTabData}
        onClick={handleClick}
        sectionId={sectionId}
      />
      <p className="w-full max-w-[380px] tab:max-w-[746px] h-[134px] tab:h-auto mx-auto mt-4 tab:mt-6 text-center">
        {description}
      </p>
    </div>
  );
}
