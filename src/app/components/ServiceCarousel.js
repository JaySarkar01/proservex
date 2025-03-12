"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"; // Left & Right Icons
const mostitem = [
  {
    image: "/mostbooked/tishu-pain.webp",
    name: "Product 1",
    rating: 4.5,
    reviews: 120,
    price: 19.99,
  },
  {
    image: "/mostbooked/sofa-clean.webp",
    name: "Product 2",
    rating: 4.2,
    reviews: 85,
    price: 24.99,
  },
  {
    image: "/mostbooked/post-control.webp",
    name: "Product 3",
    rating: 4.8,
    reviews: 200,
    price: 29.99,
  },
  {
    image: "/mostbooked/masaage.webp",
    name: "Product 3",
    rating: 4.8,
    reviews: 200,
    price: 29.99,
  },
  {
    image: "/mostbooked/instant-clean.webp",
    name: "Product 3",
    rating: 4.8,
    reviews: 200,
    price: 29.99,
  },
  {
    image: "/mostbooked/home-consutation.webp",
    name: "Product 3",
    rating: 4.8,
    reviews: 200,
    price: 29.99,
  },
  {
    image: "/mostbooked/haircur.webp",
    name: "Product 3",
    rating: 4.8,
    reviews: 200,
    price: 29.99,
  },
  {
    image: "/mostbooked/chimmny-clean.jpeg",
    name: "Product 3",
    rating: 4.8,
    reviews: 200,
    price: 29.99,
  },
  {
    image: "/mostbooked/2-bathrooms.webp",
    name: "Product 3",
    rating: 4.8,
    reviews: 200,
    price: 29.99,
  },
];

// Sample Data
const banners = [
  {
    img: "/images/wall-panels.avif",
    title: "Transform your space with wall panels",
    price: "₹6,999 only",
    btnText: "Book now",
  },
  {
    img: "/images/water-purifier.webp",
    title: "RO Water Purifiers",
    sale: "Sale live",
    btnText: "Buy now",
  },
  {
    img: "/images/wall-panels.avif",
    title: "Transform your space with wall panels",
    price: "₹6,999 only",
    btnText: "Book now",
  },
  {
    img: "/images/ac-cleaning.png",
    title: "2X COOLING",
    subtitle: "Deep clean, zero hassle",
    description: "Foam-jet AC service",
    btnText: "Book now",
  },
  {
    img: "/images/wall-panels.avif",
    title: "Transform your space with wall panels",
    price: "₹6,999 only",
    btnText: "Book now",
  },
];

const services = [
  { img: "/images/water-purifier.jpeg", name: "Native Water Purifier" },
  { img: "/images/smart-locks.jpeg", name: "Native Smart Locks" },
  { img: "/images/kitchen-cleaning.webp", name: "Kitchen Cleaning" },
  { img: "/images/spa.avif", name: "Spa Ayurveda" },
  { img: "/images/hair-studio.jpeg", name: "Hair Studio for Women" },
  { img: "/images/kitchen-cleaning.webp", name: "Kitchen Cleaning" },
  { img: "/images/spa.avif", name: "Spa Ayurveda" },
  { img: "/images/hair-studio.jpeg", name: "Hair Studio for Women" },
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

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const itemsPerView = 4; // Change based on your layout

  const nextSlide = () => {
    if (currentIndex < mostitem.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the beginning if at the end
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Math.ceil(mostitem.length / itemsPerView) - 1); // Go to the last slide
    }
  };

  const getTransformValue = () => {
    const totalItems = mostitem.length;
    const totalViews = Math.ceil(totalItems / itemsPerView);

    if (currentIndex === totalViews - 1) {
      // If at the end, reverse the direction
      return `-${(totalItems - itemsPerView) * (100 / itemsPerView)}%`;
    } else {
      // Normal sliding
      return `-${currentIndex * (100 / itemsPerView)}%`;
    }
  };

  // Auto swap every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto px-6 lg:px-28 items-start justify-start">
      {/* Banner Swiper */}
      <div className="relative w-full mb-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="overflow-hidden"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={banner.img}
                  alt={banner.title}
                  layout="fill"
                  objectFit="cover"
                  
                />
                <div className="absolute inset-0 bg-black/50 p-5 flex flex-col justify-between">
                  <h3 className="text-white text-lg md:text-xl font-semibold">
                    {banner.title}
                  </h3>
                  <p className="text-white text-sm">{banner.subtitle}</p>
                  <button className="bg-white w-3xs text-black px-5 py-2 text-sm rounded-md mt-2 transition hover:bg-gray-300">
                    {banner.btnText}
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     
     {/* most salle */}
<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
  Most booked services
</h2>
<div className="relative flex w-full items-center justify-center">
  {/* Left Button */}
  <button
    onClick={prevSlide}
    className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
  >
    <MdKeyboardArrowLeft size={30} />
  </button>

  {/* Slider Container */}
  <div className="overflow-hidden w-full">
    <div
      className="flex transition-transform duration-500"
      style={{
        transform: `translateX(${getTransformValue()})`,
      }}
    >
      {mostitem.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="absolute w-full h-full object-cover"
              />
            </div>

            <div className="mt-3 px-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <div className="flex items-center mt-1 text-yellow-500">
                <FaStar />
                <span className="text-sm font-medium ml-1">
                  {item.rating}
                </span>
                <span className="text-gray-500 text-xs ml-2">
                  ({item.reviews} reviews)
                </span>
              </div>
              <p className="text-lg text-gray-600 mt-2">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Right Button */}
  <button
    onClick={nextSlide}
    className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
  >
    <MdKeyboardArrowRight size={30} />
  </button>
</div>

      {/* Services Section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          New and Noteworthy
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          modules={[Navigation]}
          className="overflow-hidden"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-4 lg:p-10 rounded-xl border-1 border-gray-200 hover:shadow-lg cursor-pointer transition-all duration-100"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={service.img}
                    alt={service.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-3 text-center text-sm lg:text-xl font-medium">
                  {service.name}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full lg:mt-16 lg:mb-16 flex justify-center">
  {/* Mobile Banner */}
  <div className="lg:hidden w-full h-auto overflow-hidden">
    <img
      src="/doorlockformobile.png"
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer"
      alt="Door Lock Mobile"
      onClick={() => console.log("Mobile Banner Clicked")}
    />
  </div>

  {/* Desktop Banner */}
  <div className="hidden lg:block w-full h-auto overflow-hidden">
    <img
      src="/doorlockbanner.png"
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer"
      alt="Door Lock Desktop"
      onClick={() => console.log("Desktop Banner Clicked")}
    />
  </div>
</div>


      {/* Women Cares */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Salon for Women
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          modules={[Navigation]}
          className="overflow-hidden"
        >
          {woCares.map((woCares, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-4 lg:p-10 rounded-xl hover:shadow-lg cursor-pointer transition-all border-2 border-gray-200 duration-100"
                whileHover={{ scale: 1.05 }}
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
      <div className="w-full lg:mt-16 lg:mb-16 flex justify-center">
        <img
          src="/wallpannelsmobile.png"
          className="lg:hidden h-100 w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="Door Lock Mobile"
          onClick={() => console.log("Mobile Banner Clicked")}
        />

        <img
          src="/wallpannels.png"
          className="hidden lg:block h-100 w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          alt="Door Lock Desktop"
          onClick={() => console.log("Desktop Banner Clicked")}
        />
      </div>
    </div>
  );
}
