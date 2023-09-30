"use client";

import { Image } from "@chakra-ui/react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface ImageCarouselProps {
  imageList: string[];
  height?: string;
  [x: string]: any;
}

export const ImageCarousel = ({ imageList, height, ...restProps }: ImageCarouselProps) => {
  return (
    <Swiper modules={[Pagination]} slidesPerView={1} slidesPerGroup={1} pagination={{ clickable: true }}>
      {imageList.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} alt="" w="100%" h={height ? height : "300px"} {...restProps} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
