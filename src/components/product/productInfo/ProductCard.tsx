import React from "react";
import { ProductItem } from "@/types/productItem";
import ProductBgImages from "./ProductBgImages";
import Image from "next/image";
import NavigationByVolume from "./navigationByVolume/NavigationByVolume";
import ProductCardInfo from "./productCardInfo/ProductCardInfo";
import ProductCardImage from "./ProductCardImage";

interface ProductInfoProps {
  currentProduct: ProductItem;
}

export default function ProductCard({ currentProduct }: ProductInfoProps) {
  const { title, volume, trademark, category } = currentProduct;

  return (
    <div className="relative aspect-[360/171] tab:aspect-[768/209] laptop:aspect-[1280/261]">
      <ProductBgImages />
      <section className="container laptop:flex justify-between max-w-[1920px] pb-20 tab:pb-[100px] scroll-mt-[92px]">
        <ProductCardImage currentProduct={currentProduct} />
        <ProductCardInfo currentProduct={currentProduct} />
      </section>
    </div>
  );
}
