"use client";

import { Image } from "@chakra-ui/react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface ImageCarouselProps {
  imageList: string[];
}

export const ImageCarousel = ({ imageList }: ImageCarouselProps) => {
  return (
    <Swiper modules={[Pagination]} slidesPerView={1} slidesPerGroup={1} pagination={{ clickable: true }}>
      {imageList.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} alt="" w="100%" h="300px" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
