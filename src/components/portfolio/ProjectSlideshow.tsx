import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProjectSlideshow: React.FC<{ images: string[] }> = ({ images }) => (
  <Swiper spaceBetween={10} slidesPerView={1} loop>
    {images.map((src, i) => (
      <SwiperSlide key={i}>
        <img
          src={src}
          alt={`slide-${i}`}
          className="w-full h-72 object-cover rounded-md"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ProjectSlideshow;
