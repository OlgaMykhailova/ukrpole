import React from "react";
import Image from "next/image";
import { ProductItem } from "@/types/productItem";

interface CatalogCardProps {
  product: ProductItem;
}

export default function CatalogCard({ product }: CatalogCardProps) {
  const { id, trademark, title, volume } = product;

  return (
    <li>
      <Image
        src={`/images/contentImages/products/${trademark.id}-${id}-${volume}.webp`}
        alt={title}
        width={760}
        height={1116}
        className="w-[97px] h-auto"
      />
      <h3>{title}</h3>
      <p>{volume}</p>
      <p>{trademark.title}</p>
    </li>
  );
}
