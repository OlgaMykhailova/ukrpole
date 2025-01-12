"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyles.css";

import React from "react";
import Slider from "react-slick";
import PartnerItem from "./PartnerItem";

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
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
  };

  return (
    <div className="sm:hidden pb-[42px] overflow-hidden">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <ul className="flex flex-wrap justify-center gap-4">
              {firstPart.map((partner, idx) => (
                <PartnerItem key={idx} partner={partner} />
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-wrap justify-center gap-4">
              {secondPart.map((partner, idx) => (
                <PartnerItem key={idx} partner={partner} />
              ))}
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
}
