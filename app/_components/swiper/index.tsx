"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

interface SwiperComponentProps {
  // Define props to configure the Swiper component
  slides: React.ReactNode[]; // An array of slide content
  options?: any; // Swiper options
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  slides,
  options,
}) => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 0,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={20}
        breakpoints={{
          760: {
            slidesPerView: 3,
          },
        }}
        {...options}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => <div>{slideContent}</div>}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
