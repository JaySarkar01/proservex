"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaStar,FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

const cleaning = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700129474836-c5b146.jpeg",
    name: "Full Home Cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700204929955-75dd47.jpeg",
    name: "Sofa & Cartpet Cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700141859007-d310cd.jpeg",
    name: "Cockroach & Pest Control",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700217115195-4b42c0.jpeg",
    name: "Bathroom Cleaning",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700217150690-faf4ec.jpeg",
    name: "Kitchen Cleaning",
  },
];

const service = [
  {
    img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700141800784-5ca077.jpeg",
  name:"AC Service & Repair"
  },
  {
    img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700142017541-7905b3.jpeg",
    name:"Washing Machine"
  },
  {
    img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700142103380-c88bd4.jpeg",
    name:"Television"
  },
  {
    img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1700198936506-15c0e3.jpeg",
    name:"Geyser"
  },
  {
    img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_231,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700209775572-5a2f4a.jpeg",
    name:"Air Purifier"
  },
]

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

const quick = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1727776710805-0ce8d7.jpeg",
    name: "Drill & hang",
    rating: 4.5,
    price: 199,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653918245354-14a137.png",
    name: "Door lock repair",
    rating: 4.8,
    price: 349,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701149688871-2980d1.jpeg",
    name: "Switch/socket replacement",
    rating: 4.7,
    price: 299,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653892249137-8848bb.png",
    name: "Cupboard hinge instalation",
    rating: 4.6,
    price: 399,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653918711360-0acbd8.png",
    name: "Minor wooden door repair",
    rating: 4.3,
    price: 149,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652859577916-8377e7.png",
    name: "Switchbox installation",
    rating: 4.9,
    price: 129,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_182,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653635645386-f5c0e9.png",
    name: "New internal wiring 5m",
    rating: 4.5,
    price: 159,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_182,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653646533794-18b4bd.png",
    name: "Channel repair",
    rating: 4.8,
    price: 499,
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_182,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1653894188663-b18fec.png",
    name: "Makeup only",
    rating: 4.8,
    price: 499,
  },

];

export default function ServiceCarousel() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
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
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-4"
              >
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
      <div className="w-full mb-10">
        <div className="mb-10 flex flex-row gap-2 md:flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Cleaning & pest control
          </h2>
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
          {cleaning.map((woCares, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-4 lg:p-4 hover:border-2 hover:border-gray-300 rounded-xl cursor-pointer transition-all border-1 border-gray-200 duration-100"
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


      <div className="w-full mb-10">
        <div className="mb-10 flex flex-row gap-2 md:flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Cleaning & pest control
          </h2>
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
          {service.map((woCares, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-4 hover:border-2 hover:border-gray-300 lg:p-4 rounded-xl cursor-pointer transition-all border-1 border-gray-200 duration-100"
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

      <div className="w-full py-8 relative">
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
          {quick.map((item, index) => (
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
      
      <div className="w-full lg:mt-16 lg:mb-16 flex justify-center">
        {/* Mobile Banner */}
        <div className="lg:hidden w-full h-auto overflow-hidden">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1734687243557-d1427a.jpeg"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer"
            alt="Door Lock Mobile"
            onClick={() => console.log("Mobile Banner Clicked")}
          />
        </div>

        {/* Desktop Banner */}
        <div className="hidden lg:block w-full h-auto overflow-hidden">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1734687235149-cd2754.jpeg"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 cursor-pointer"
            alt="Door Lock Desktop"
            onClick={() => console.log("Desktop Banner Clicked")}
          />
        </div>
      </div>
    </div>
  );
}
