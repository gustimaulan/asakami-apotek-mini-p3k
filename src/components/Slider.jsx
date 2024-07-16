import React from "react";

//swiper
import slider from "../utils/slider.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      style={{
        "--swiper-pagination-color": "#000",
      }}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Allow autoplay even after user interaction
      }}
      slidesPerView={1}
      className="mySwiper pb-8"
    >
      {slider.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.img} alt={slide.title} className="w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
