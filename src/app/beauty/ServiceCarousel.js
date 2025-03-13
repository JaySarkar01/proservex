"use client"; // Required for Next.js 13+ App Router 

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banner = [
  { img: "/women_care/b1.webp" },
  { img: "/women_care/b2.webp" },
  { img: "/women_care/b4.webp" },
  { img: "/women_care/b3.webp" },
  { img: "/women_care/b5.webp" },
];

const ServiceCarousel = () => {
  return (
    <>
    {/* banner section */}
    <div className="w-full px-4 md:px-10 lg:px-20 py-8 pt-0">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="relative rounded-xl"
      >
        {banner.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px] md:h-[300px] lg:h-[290px] overflow-hidden rounded-lg shadow-lg hover:scale-103 duration-300">
              <Image
                src={item.img}
                alt={`Banner ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: black !important;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          background: black !important;
        }
      `}</style>
    </div>

    
    </>
    
  );
};

export default ServiceCarousel;
