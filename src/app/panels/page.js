"use client";

import Banner from "./banner";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import Footer from "@/app/components/footer";
import "swiper/css/pagination";
import "swiper/css/navigation";

const imageGroups = {
  "Most Booked Services": [
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273400427-c1743f.jpeg" },
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273518035-1a18ef.jpeg" },
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273496859-b41719.jpeg" },
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273415670-ad859a.jpeg" },
  ],
  "Beautiful Walls, Any Occasion": [
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273514500-d737aa.jpeg" },
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273505094-907913.jpeg" },
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273493553-75792f.jpeg" },
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273652680-d04de6.jpeg" },
  ],
  "For Every Decor Style": [
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273511309-ba7840.jpeg" },
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273502111-b81a69.jpeg" },
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273490349-affaf7.jpeg" },
    { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273652680-d04de6.jpeg" },
  ],
};

export default function Carousel() {
  return (
    <div className="pt-0">
       <div className="mx-auto px-6 lg:px-28 items-start justify-start md:pt-8 lg:ml-41 lg:mr-41 mb-8 pt-28">
        <div className="w-full flex justify-center">
          {/* Mobile Banner */}

          <div className="lg:hidden w-full h-auto overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739195629335-70c6a6.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              alt="water purifier for mobile"
              onClick={() => console.log("Mobile Banner Clicked")}
            />
          </div>

          {/* Desktop Banner */}
          <div className="hidden lg:block w-full h-auto overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1736922795409-bece35.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer pt-24"
              alt="water purifier for bigger screen"
              onClick={() => console.log("Desktop Banner Clicked")}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 lg:px-28 items-start justify-start md:pt-8 lg:ml-41 lg:mr-41 mb-8 pt-28">
        <div className="w-full flex justify-center">
          {/* Mobile Banner */}

          <div className="lg:hidden w-full h-auto overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1738923227504-27f41a.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              alt="water purifier for mobile"
              onClick={() => console.log("Mobile Banner Clicked")}
            />
          </div>

          {/* Desktop Banner */}
          {/* <div className="hidden lg:block w-full h-auto overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1736922795409-bece35.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer pt-24"
              alt="water purifier for bigger screen"
              onClick={() => console.log("Desktop Banner Clicked")}
            />
          </div> */}
        </div>
      </div>




      <div className="w-full px-4 md:px-10 lg:px-20 py-0 pb-0">
      {Object.entries(imageGroups).map(([title, images], sectionIndex) => {
        const swiperRef = useRef(null);

        return (
          <div key={sectionIndex} className="w-full px-6 md:px-14 lg:px-24 py-8 relative">
            <h1 className="text-3xl md:text-4xl font-semibold pb-6">{title}</h1>

            <Swiper
              ref={swiperRef}
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2} // Default for mobile
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
                1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
              }}
              speed={600}
              autoplay={{ delay: 3003, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={false} // Using custom buttons
              className="relative"
            >
              {images.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="bg-white cursor-pointer rounded-lg overflow-hidden border border-gray-300 shadow-lg max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto hover:scale-102 transition-transform duration-300">
                    {/* Image with Increased Size */}
                    <div className="relative w-full h-[200px] md:h-[280px] lg:h-[560px]">
                      <Image
                        src={item.img}
                        alt={`Slide ${index}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              className="absolute left-0 md:left-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <FaChevronLeft />
            </button>

            <button
              className="absolute right-0 md:right-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <FaChevronRight />
            </button>
          </div>
        );
      })}

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: black !important;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: black !important;
        }
        .swiper-slide {
          transition: transform 0.6s ease-in-out;
        }
      `}</style>
    </div>


<Banner/>
   <Footer/>
    </div>
    
  );
}
