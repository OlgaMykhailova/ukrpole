"use client";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./sliderStyles.css";

import React from "react";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PartnerItem from "./PartnerItem";

interface PartnersSliderProps {
  partnersList: string[];
}

export default function PartnersSlider({ partnersList }: PartnersSliderProps) {
  return (
    <div className="sm:hidden">
      <Swiper
        grid={{
          rows: 3,
        }}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={true}
        loop={true}
        modules={[Grid, Pagination, Autoplay]}
        className="partnersSlider"
      >
        {partnersList.map((partner, idx) => (
          <SwiperSlide key={idx} className="partnersSlider">
            <PartnerItem partner={partner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
