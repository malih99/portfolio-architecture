import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectSlideshowProps {
  images: string[];
}

const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ images }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, A11y]}
        spaceBetween={12}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        className="rounded-xl overflow-hidden"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="bg-gray-100 dark:bg-gray-800">
            <div className="aspect-[16/9] w-full">
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlideshow;
