"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Footer from "@/app/components/footer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Features = [
  { name: "Filters", img: "/native/U1.webp" },
  { name: "Purification", img: "/native/U2.webp" },
  { name: "Smart-app", img: "/native/U3.webp" },
  { name: "Easy-to-use features", img: "/native/U4.webp" },
  { name: "Top-notch design", img: "/native/U5.webp" },
  { name: "Warranty", img: "/native/U6.webp" },
];

const FeaturesAi = [
    { name: "touchKey", img: "/native/L1.webp" },
    { name: "Camaera", img: "/native/L2.webp" },
    { name: "Bell-Link Technology", img: "/native/L3.webp" },
    { name: "Smart app", img: "/native/L4.webp" },
    { name: "Security", img: "/native/L5.webp" },
    { name: "6-way unlock", img: "/native/L6.webp" },
  ];

export default function Page(){
  const swiperRef = useRef(null);
  const swiperRef1 = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <>
    
    <div className="mx-auto px-6 lg:px-28 items-start justify-start pt-32 md:pt-40">
      {/* Banner Section */}
      <div className="w-full flex justify-center">
        {/* Mobile Banner */}
        <div className="lg:hidden w-full h-auto overflow-hidden">
          <img
            src="/native/water-cooler.webp"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            alt="water purifier for mobile"
            onClick={() => console.log("Mobile Banner Clicked")}
          />
        </div>

        {/* Desktop Banner */}
        <div className="hidden lg:block w-full h-auto overflow-hidden">
          <img
            src="/native/water-cooler-full.webp"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer"
            alt="water purifier for bigger screen"
            onClick={() => console.log("Desktop Banner Clicked")}
          />
        </div>
      </div>

      <div className="mx-auto px-4 md:px-6 lg:px-20 items-start justify-start pt-12 md:pt-16">
      {/* Swiper Section */}
      <div className="w-full max-w-8xl mx-auto py-8 px-2 md:px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-start mb-4 md:mb-6">
          Cutting-Edge Features
        </h2>
        
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2 }, // 2 visible cards on mobile
            768: { slidesPerView: 3 }, // 3 on tablets
            1024: { slidesPerView: 4 }, // 4 on large screens
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {Features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-[250px] md:h-[400px] lg:h-[600px] overflow-hidden rounded-xl"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
              >
                {/* Image */}
                <img
                  src={feature.img}
                  alt={feature.name}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-102"
                />

                {/* Moving Text on Hover */}
                {hovered === index && (
                  <div
                    className="absolute text-white text-lg font-semibold pointer-events-none"
                    style={{
                      left: `${position.x - 50}px`,
                      top: `${position.y - 20}px`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    {feature.name}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
           {/* Custom Navigation Buttons */}
        <button
          className="absolute left-0 md:left-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-700"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaChevronLeft className="text-lg" />
        </button>

        <button
          className="absolute right-0 md:right-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-700"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaChevronRight className="text-lg" />
        </button>
        </Swiper>
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
    </div>

{/* smart lock Section */}
<div className="w-full flex justify-center">
        {/* Mobile Banner */}
        <div className="lg:hidden w-full h-auto overflow-hidden">
          <img
            src="/native/smart-lock.webp"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer rounded-2xl"
            alt="Door Lock Mobile"
            onClick={() => console.log("Mobile Banner Clicked")}
          />
        </div>

        {/* Desktop Banner */}
        <div className="hidden lg:block w-full h-auto overflow-hidden">
          <img
            src="/native/smart-lock-full.webp"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer"
            alt="Door Lock Desktop"
            onClick={() => console.log("Desktop Banner Clicked")}
          />
        </div>
      </div>

      <div className="mx-auto px-4 md:px-6 lg:px-20 items-start justify-start pt-12 md:pt-16">
  {/*bottom Section */}
  <div className="w-full max-w-8xl mx-auto py-8 px-2 md:px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-start mb-4 md:mb-6">
    Future is Ready
    </h2>
    <Swiper
     ref={swiperRef1}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        480: { slidesPerView: 2 }, // 2 visible cards on mobile
        768: { slidesPerView: 3 }, // 3 on tablets
        1024: { slidesPerView: 4 }, // 4 on large screens
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="w-full"
    >
      {FeaturesAi.map((feature, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-[250px] md:h-[400px] lg:h-[600px] overflow-hidden rounded-xl"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={(e) =>
              setPosition({ x: e.clientX, y: e.clientY })
            }
          >
           <div
  className="relative w-full h-[250px] md:h-[400px] lg:h-[600px] overflow-hidden rounded-xl transition-transform duration-300 hover:scale-102"
  onMouseEnter={() => setHovered(index)}
  onMouseLeave={() => setHovered(null)}
>
  {/* Image */}
  <img
    src={feature.img}
    alt={feature.name}
    className="w-full h-full object-contain"
  />

  {/* Name Overlay */}
  {hovered === index && (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white text-lg font-semibold p-2 rounded-lg bg-black/30 backdrop-blur-md">
        {feature.name}
      </span>
    </div>
  )}
</div>

          </div>
        </SwiperSlide>
      ))}
      {/* Custom Navigation Buttons */}
     <button
          className="absolute left-0 md:left-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-700"
          onClick={() => swiperRef1.current.swiper.slidePrev()}
        >
          <FaChevronLeft className="text-lg" />
        </button>

        <button
          className="absolute right-0 md:right-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-700"
          onClick={() => swiperRef1.current.swiper.slideNext()}
        >
          <FaChevronRight className="text-lg" />
        </button>
    </Swiper>
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
</div>


{/* Banner Section */}
<div className="w-full flex justify-center">
        {/* Mobile Banner */}
        <div className="lg:hidden w-full h-auto overflow-hidden">
          <img
            src="/native/madeforindia.jpeg"
            className="w-full h-full object-cover cursor-default"
            alt="water purifier for mobile"
            onClick={() => console.log("Mobile Banner Clicked")}
          />
        </div>

        {/* Desktop Banner */}
        <div className="hidden lg:block w-full h-auto overflow-hidden">
          <img
            src="/native/techno.webp"
            className="w-full h-full object-cover cursor-default"
            alt="water purifier for bigger screen"
            onClick={() => console.log("Desktop Banner Clicked")}
          />
        </div>
      </div>
    </div>
    <footer className="pt-4">
    <Footer/>
</footer>
</>
  );
};

