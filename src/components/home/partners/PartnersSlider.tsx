"use client";

import React from "react";
import Slider from "react-slick";
import PartnerItem from "./PartnerItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyles.css";

interface PartnersSliderProps {
  partnersList: string[];
}

export default function PartnersSlider({ partnersList }: PartnersSliderProps) {
  const firstPart = partnersList.slice(0, 6);
  const secondPart = partnersList.slice(6, partnersList.length);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-out",
  };

  return (
    <div className="sm:hidden slider-container">
      <Slider {...settings}>
        <div>
          <ul className="flex flex-wrap justify-between gap-y-4 px-2">
            {firstPart.map((partner, idx) => (
              <PartnerItem key={idx} partner={partner} />
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-wrap justify-between gap-y-4 px-2">
            {secondPart.map((partner, idx) => (
              <PartnerItem key={idx} partner={partner} />
            ))}
          </ul>
        </div>
      </Slider>
    </div>
  );
}
