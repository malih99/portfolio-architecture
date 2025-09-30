import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  A11y,
} from "swiper/modules";
import type { Project } from "../../types/project";
import Img from "../ui/Image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = { items: Project[] };

const FeaturedProjectsSlider: React.FC<Props> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, A11y]}
        spaceBetween={16}
        slidesPerView={1}
        centeredSlides
        loop
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.4 },
          1024: { slidesPerView: 1.6 },
        }}
        className="rounded-xl"
        preventClicks={false}
        preventClicksPropagation={false}
      >
        {items.map((p) => (
          <SwiperSlide key={p.id}>
            <div
              role="link"
              tabIndex={0}
              onClick={() => navigate(`/portfolio/${p.id}`)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") &&
                navigate(`/portfolio/${p.id}`)
              }
              className="block group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Img
                  src={p.image.startsWith("/") ? p.image : `/${p.image}`}
                  alt={p.title}
                  ratio="16/9"
                  sizes="(min-width:1024px) 60vw, (min-width:640px) 80vw, 100vw"
                />
                {/* overlay */}
                <div className="absolute inset-0 from-black/10 to-black/50 dark:from-black/20 dark:to-black/60 bg-gradient-to-t opacity-90 pointer-events-none" />
                {/* caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 pointer-events-none">
                  <div className="flex items-center gap-2 text-xs text-white/80 mb-1">
                    <span>{p.subtitle}</span> <span>•</span>{" "}
                    <span>{p.year}</span>
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="hidden sm:block text-white/90 text-sm mt-1 line-clamp-2">
                    {p.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-white mt-3 text-sm opacity-90 group-hover:opacity-100">
                    مشاهده پروژه
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProjectsSlider;
