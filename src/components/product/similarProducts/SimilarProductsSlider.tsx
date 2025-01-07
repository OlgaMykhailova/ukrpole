"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../home/partners/sliderStyles.css";

import React, { useState, useEffect } from "react";
import CatalogCard from "@/components/shared/catalogCard/CatalogCard";
import { productsList } from "@/mockedData/products";
import { useLocale } from "next-intl";
import { Locale } from "@/types/locale";
import Slider from "react-slick";
import { ProductItem } from "@/types/productItem";

interface SimilarProductsSliderProps {
  currentProduct: ProductItem;
}

export default function SimilarProductsSlider({
  currentProduct,
}: SimilarProductsSliderProps) {
  const locale = useLocale();

  const { category } = currentProduct;

  const localizedProductsList = productsList[locale as Locale] as ProductItem[];
  const filteredProducts = localizedProductsList.filter(
    (product) => product.category !== category
  );
  const [similarProducts, setSimilarProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    const shuffledProducts = [...filteredProducts].sort(
      () => Math.random() - 0.5
    );
    setSimilarProducts(shuffledProducts.slice(0, 6));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "ease-out",
  };

  return (
    <div className="pb-[42px] overflow-hidden">
      <ul className="slider-container">
        <Slider {...settings}>
          {similarProducts.map((product, idx) => (
            <CatalogCard
              key={idx}
              product={product}
              className="mx-2 laptop:mx-3"
            />
          ))}
        </Slider>
      </ul>
    </div>
  );
}
