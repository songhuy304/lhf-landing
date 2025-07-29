import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/free-mode";

import { cn } from "@/lib/utils";
import React, { ReactNode, useId, useRef } from "react";

interface SliderProps {
  title?: string;
  icon?: ReactNode;
  children: React.ReactNode;
  swiperOptions?: SwiperOptions;
  showNavigation?: boolean;
  showPagination?: boolean;
}

const defaultSwiperOptions: SwiperOptions = {
  spaceBetween: 12,
  speed: 600,
  breakpoints: {
    320: { slidesPerView: 1, slidesPerGroup: 1 },
    1024: { slidesPerView: 3, slidesPerGroup: 3 },
  },
};

export interface SliderItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const Carousel = ({
  title,
  children,
  swiperOptions,
  showNavigation = true,
  showPagination = false,
}: SliderProps) => {
  const paginationId = useId();
  const paginationElClass = `swiper-pagination-${paginationId.replace(
    /:/g,
    ""
  )}`;
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const childrenArray = React.Children.toArray(children);

  return (
    <div className="w-full text-white">
      <div
        className={cn(
          "mb-4 flex items-center justify-between",
          !showNavigation && !title && "mb-0"
        )}
      ></div>

      <Swiper
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        watchOverflow={false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          el: `.${paginationElClass}`,
          clickable: true,
        }}
        onInit={(swiper) => {
          // fix navigation on first render
          //@ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          //@ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        {...(swiperOptions ? swiperOptions : defaultSwiperOptions)}
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide className="swiper-slide !h-auto py-2" key={index}>
            {child}
          </SwiperSlide>
        ))}
        {showPagination && (
          <div
            className={`${paginationElClass} mt-4 flex justify-center gap-2`}
          />
        )}
      </Swiper>
    </div>
  );
};

export { Carousel };
