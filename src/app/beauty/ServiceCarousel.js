"use client"; // Required for Next.js 13+ App Router 

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const banner1 = [
  { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_159,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010866586-2c12ad.jpeg", name: "Classic Burger",
    rating: 4.5,
    price: 199, },
  { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_159,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010878073-a8612e.jpeg",
    name: "Pepperoni Pizza",
    rating: 4.8,
    price: 349, }, // Add more external image links here
  { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_159,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010890450-57eb78.jpeg",
    name: "Pasta Alfredo",
    rating: 4.7,
    price: 299, },
  { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_159,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732621521751-3d3718.jpeg",
    name: "Tandoori Chicken",
    rating: 4.6,
    price: 399, },
  { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010872837-c503b2.jpeg",
    name: "Veggie Wrap",
    rating: 4.3,
    price: 149, },
  { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1734607570661-a50907.jpeg",
    name: "Chocolate Brownie",
    rating: 4.9,
    price: 129, },
  { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731066064017-84baf7.jpeg",
    name: "Mango Smoothie",
    rating: 4.5,
    price: 159, },
  { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731066070722-1f3637.jpeg",
    name: "Sushi Platter",
    rating: 4.8,
    price: 499, },
  { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_159,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010866586-2c12ad.jpeg",
    name: "Cheese Fries",
    rating: 4.4,
    price: 179, },
];


const banner = [
  { img: "/women_care/b1.webp" },
  { img: "/women_care/b2.webp" },
  { img: "/women_care/b4.webp" },
  { img: "/women_care/b3.webp" },
  { img: "/women_care/b5.webp" },
];

const ServiceCarousel = () => {
  const swiperRef = useRef(null);
  return (
    <>
    {/* banner section */}
    <div className="w-full px-4 md:px-10 lg:px-20 py-8 pt-0">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // Default for small screens
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },  // Tablet (min-width: 640px)
          768: { slidesPerView: 2, spaceBetween: 20 },  // Medium tablets (min-width: 768px)
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop (min-width: 1024px)
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
      
    <div className="w-full px-6 md:px-14 lg:px-24 py-8 relative">
      <h1 className="text-4xl font-semibold pb-8">Most bookeed services</h1>
      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2} // Default for small screens
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },  // Tablet (min-width: 640px)
          768: { slidesPerView: 4, spaceBetween: 20 },  // Medium tablets (min-width: 768px)
          1024: { slidesPerView: 5, spaceBetween: 30 }, // Desktop (min-width: 1024px)
        }}
        loop={true}
        pagination={{ clickable: true }}
        className="relative"
      >
        {banner1.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white cursor-pointer rounded-lg overflow-hidden border border-gray-300 max-w-[300px] mx-auto">
              {/* Image (Smaller Size) */}
              <div className="relative w-full h-[180px] md:h-[220px] lg:h-[220px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-start">
                <h3 className="text-md font-semibold">{item.name}</h3>

                {/* Rating */}
                <div className="flex items-center justify-start mt-1">
                  <FaStar className="text-pink-400" />
                  <span className="ml-1 text-gray-700">{item.rating}</span>
                </div>

                {/* Price */}
                <p className="text-md font-bold text-gray-600 mt-2">
                  ₹{item.price}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-300 text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <FaChevronLeft />
      </button>

      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-300 text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <FaChevronRight />
      </button>

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
