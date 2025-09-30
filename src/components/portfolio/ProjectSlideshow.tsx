import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  A11y,
  Thumbs,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

interface ProjectSlideshowProps {
  images: string[];
}

const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* اسلاید اصلی */}
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Keyboard,
          Autoplay,
          A11y,
          Thumbs,
          EffectFade,
        ]}
        spaceBetween={12}
        slidesPerView={1}
        loop
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="bg-gray-100 dark:bg-gray-800">
            <div className="aspect-[16/9] w-full">
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      {images.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          watchSlidesProgress
          spaceBetween={8}
          slidesPerView={Math.min(images.length, 5)}
          className="mt-3"
        >
          {images.map((src, i) => (
            <SwiperSlide key={`thumb-${i}`} className="cursor-pointer">
              <div className="aspect-[16/9] w-full rounded overflow-hidden border border-zinc-200 dark:border-zinc-700">
                <img
                  src={src}
                  alt={`thumb-${i}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProjectSlideshow;
