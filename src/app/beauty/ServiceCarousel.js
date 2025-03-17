"use client"; // Required for Next.js 13+ App Router

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const banner1 = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_159,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010866586-2c12ad.jpeg",
    name: "Classic Burger",
    rating: 4.5,
    price: 199,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_159,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010878073-a8612e.jpeg",
    name: "Adwance Makeup",
    rating: 4.8,
    price: 349,
  }, // Add more external image links here
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_159,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010890450-57eb78.jpeg",
    name: "Basic Makeup",
    rating: 4.7,
    price: 299,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_159,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732621521751-3d3718.jpeg",
    name: "Hair Cut",
    rating: 4.6,
    price: 399,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010872837-c503b2.jpeg",
    name: "Premium Makeup",
    rating: 4.3,
    price: 149,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1734607570661-a50907.jpeg",
    name: "Hair Style",
    rating: 4.9,
    price: 129,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731066064017-84baf7.jpeg",
    name: "Massage",
    rating: 4.5,
    price: 159,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731066070722-1f3637.jpeg",
    name: "Hair Cut",
    rating: 4.8,
    price: 499,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_159,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010866586-2c12ad.jpeg",
    name: "Makeup & hairstyling",
    rating: 4.4,
    price: 179,
  },
];
const haircare = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1734607570661-a50907.jpeg",
    name: "In/Out curl blow-dry",
    rating: 4.5,
    price: 199,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010872837-c503b2.jpeg",
    name: "Basic makeup package",
    rating: 4.8,
    price: 349,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010866586-2c12ad.jpeg",
    name: "Makeup & hairstyling",
    rating: 4.7,
    price: 299,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1734607562040-43449d.jpeg",
    name: "Straight & smooth blow-dry",
    rating: 4.6,
    price: 399,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653643385578-9aa8aa.png",
    name: "L'Oreal Inoa root touch-up",
    rating: 4.3,
    price: 149,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010890450-57eb78.jpeg",
    name: "Basic makeup",
    rating: 4.9,
    price: 129,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729149180900-7bbb27.jpeg",
    name: "L'Oreal hair spa",
    rating: 4.5,
    price: 159,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732010869384-60fde7.jpeg",
    name: "Makeup only",
    rating: 4.8,
    price: 499,
  },
];
const spa = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700143543316-c5eb5c.jpeg",
    name: "Stress relief",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700143539186-26f4e5.jpeg",
    name: "Pain relief",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700143553928-f5f936.jpeg",
    name: "Natural skincare",
  },
];

const spamen = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700127735237-fc713d.jpeg",
    name: "Haircut & beard styling",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700127754257-2bc2e7.jpeg",
    name: "Hair color & Hair spa",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700127758209-ba8237.jpeg",
    name: "Pedicure Manicure",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700127746630-a2db1c.jpeg",
    name: "Facial & cleanup",
  },
];

const woCares = [
  {
    img: "/women_care/1717397972979-7b20ac.webp",
    name: "Waxing",
  },
  {
    img: "/women_care/1717397976997-1ea37f.webp",
    name: "Bleach & dentan",
  },
  {
    img: "/women_care/1717397984960-62ce97.jpeg",
    name: "Facial & cleaning",
  },
  {
    img: "/women_care/1717397993600-cd21f6.webp",
    name: "Threading & face waxing",
  },
  {
    img: "/women_care/1717397997384-93eeb0.webp",
    name: "Manicure",
  },
  {
    img: "/women_care/1717398001269-ed2528.webp",
    name: "Pedicure",
  },
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
  const swiperRef1 = useRef(null);
  return (
    <>
      {/* banner section */}
      <div className="w-full px-4 md:px-10 lg:px-20 py-8 pt-0">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Default for small screens
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 }, // Tablet (min-width: 640px)
            768: { slidesPerView: 2, spaceBetween: 20 }, // Medium tablets (min-width: 768px)
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
            640: { slidesPerView: 3, spaceBetween: 20 }, // Tablet (min-width: 640px)
            768: { slidesPerView: 4, spaceBetween: 20 }, // Medium tablets (min-width: 768px)
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
      <div className="w-full px-6 md:px-14 lg:px-24 py-8 relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Salon for Women
        </h2>

        <Swiper
        ref={swiperRef1}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },

            1024: { slidesPerView: 5 },
          }}
          
          modules={[Navigation]}
          className="overflow-hidden"
        >
          {woCares.map((woCares, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-4 lg:p-1 rounded-xl cursor-pointer transition-all border-1 border-gray-200 duration-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <p className="mt-3 text-start text-sm lg:text-xl font-medium">
                  {woCares.name}
                </p>

                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={woCares.img}
                    alt={woCares.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <button
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-300 text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
          onClick={() => swiperRef1.current.swiper.slidePrev()}
        >
          <FaChevronLeft />
        </button>

        <button
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-300 text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
          onClick={() => swiperRef1.current.swiper.slideNext()}
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

      <div className="mx-auto px-6 lg:px-28 items-start justify-start pt-0 md:pt-8 lg:ml-41 lg:mr-41 mb-8">
        <div className="w-full flex justify-center">
          {/* Mobile Banner */}

          <div className="lg:hidden w-full h-auto overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700116078187-675595.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              alt="water purifier for mobile"
              onClick={() => console.log("Mobile Banner Clicked")}
            />
          </div>

          {/* Desktop Banner */}

          <div className="hidden lg:block w-full h-auto overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216798701-9a08f0.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer"
              alt="water purifier for bigger screen"
              onClick={() => console.log("Desktop Banner Clicked")}
            />
          </div>
        </div>
      </div>
      <div className="w-full px-6 md:px-14 lg:px-24 py-8 relative">
        <div className="mb-10 flex flex-row gap-2 md:flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Spa for women
          </h2>
          <span className="text-lg font-light text-gray-600 md:mt-1">
            Refresh, Rewind, Rejuvenate
          </span>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },

            1024: { slidesPerView: 5 },
          }}
          navigation
          modules={[Navigation]}
          className="overflow-hidden"
        >
          {spa.map((woCares, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-4 lg:p-2 rounded-xl cursor-pointer transition-all border-1 border-gray-200 duration-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <p className="mt-3 text-start text-sm lg:text-xl font-medium">
                  {woCares.name}
                </p>

                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={woCares.img}
                    alt={woCares.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full px-6 md:px-14 lg:px-24 py-8 relative">
        <div className="mb-10 flex flex-row gap-2 md:flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Hair services
          </h2>
          <span className="text-lg font-light text-gray-600 md:mt-1">
            Refresh style, revamped look
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {haircare.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-0">
              {/* Image */}
              <div className="relative w-full h-[330px] rounded-md overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Content */}
              <div className="mt-3 text-start p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>

                {/* Rating */}
                <div className="flex items-center justify-start mt-1">
                  <FaStar className="text-gray-500" />
                  <span className="ml-1 text-gray-700">{item.rating}</span>
                </div>

                {/* Price */}
                <p className="text-lg font-bold text-gray-700 mt-2">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto px-6 lg:px-28 items-start justify-start pt-0 md:pt-8 lg:ml-41 lg:mr-41 mb-8">
        <div className="w-full flex justify-center">
          {/* Mobile Banner */}

          <div className="lg:hidden w-full h-auto overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700116078187-675595.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              alt="water purifier for mobile"
              onClick={() => console.log("Mobile Banner Clicked")}
            />
          </div>

          {/* Desktop Banner */}

          <div className="hidden lg:block w-full h-auto overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216790006-967dd6.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer"
              alt="water purifier for bigger screen"
              onClick={() => console.log("Desktop Banner Clicked")}
            />
          </div>
        </div>
      </div>

      <div className="w-full px-6 md:px-14 lg:px-24 py-8 relative">
        <div className="mb-10 flex flex-row gap-2 md:flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Salone for men
          </h2>
          <span className="text-lg font-light text-gray-600 md:mt-1">
            Garooming, essentials
          </span>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },

            1024: { slidesPerView: 5 },
          }}
          navigation
          modules={[Navigation]}
          className="overflow-hidden"
        >
          {spamen.map((woCares, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-4 lg:p-2 rounded-xl cursor-pointer transition-all border-1 border-gray-200 duration-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <p className="mt-3 text-start text-sm lg:text-xl font-medium">
                  {woCares.name}
                </p>

                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={woCares.img}
                    alt={woCares.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mx-auto px-6 lg:px-28 items-start justify-start pt-0 md:pt-8 lg:ml-41 lg:mr-41 mb-8">
        <div className="w-full flex justify-center">
          {/* Mobile Banner */}

          <div className="lg:hidden w-full h-auto overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_548,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700116102633-720e7b.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              alt="water purifier for mobile"
              onClick={() => console.log("Mobile Banner Clicked")}
            />
          </div>

          {/* Desktop Banner */}

          <div className="hidden lg:block w-full h-auto overflow-hidden">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216827166-bc6957.jpeg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer"
              alt="water purifier for bigger screen"
              onClick={() => console.log("Desktop Banner Clicked")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCarousel;
