"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUser, FaMapMarkerAlt, FaUber } from "react-icons/fa";

const placeholders = ["AC service", "Facial", "Kitchen cleaning"];

// Custom hook to handle typing animation
const useTypingEffect = (textArray, typingSpeed = 100, pauseTime = 1500) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length);
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    }

    setText(currentText.substring(0, charIndex));
  }, [charIndex, index, isDeleting, textArray, typingSpeed, pauseTime]);

  return text;
};

const Navbar = () => {
  const typedText = useTypingEffect(placeholders);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
    {/* Tablet Upper Bar */}
<div className="md:flex lg:hidden items-center justify-center bg-gray-100 py-3 space-x-8">
  <Link href="/beauty" className="hover:text-gray-600 text-lg">Beauty</Link>
  <Link href="/panels" className="hover:text-gray-600 text-lg">Panels</Link>
  <Link href="/native" className="hover:text-gray-600 text-lg">Native</Link>
</div>

{/* Desktop & Tablet Navbar */}
<div className="hidden md:flex items-center justify-between px-6 py-5">
  {/* Left: Logo & Links */}
  <div className="flex items-center space-x-8 lg:space-x-16">
    <a href="/">
      <h1 className="text-2xl lg:text-3xl font-bold cursor-default">
        <span>ProServe</span>
        <span className="text-orange-600">X</span>
      </h1>
    </a>
    {/* Hide these links on tablets (they are in the upper bar) */}
    <div className="hidden lg:flex space-x-16">
      <Link href="/beauty" className="hover:text-gray-600 text-xl">Beauty</Link>
      <Link href="/panels" className="hover:text-gray-600 text-xl">Panels</Link>
      <Link href="/native" className="hover:text-gray-600 text-xl">Native</Link>
    </div>
  </div>

  {/* Middle: Search Bars */}
  <div className="flex space-x-4 pl-3">
    {/* Location Search */}
    <div className="relative">
      <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-500" />
      <input
        type="text"
        placeholder="Search location..."
        className="w-40 lg:w-48 pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
      />
    </div>

    {/* Service Search with Typing Animation */}
    <div className="relative w-64 lg:w-80">
      <FaSearch className="absolute left-3 top-3 text-gray-500" />
      <motion.input
        type="text"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none text-base whitespace-nowrap overflow-hidden"
        placeholder={`'Search for '${typedText} |'`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  </div>

  {/* Right: Cart & Sign-in */}
  <div className="flex space-x-6 lg:space-x-8">
    <Image
      src="/icons/icons8-cart-96 (1).png"
      alt="Cart"
      width={32}
      height={32}
      className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10"
    />
    <Image
      src="/icons/user (2).png"
      alt="User"
      width={32}
      height={32}
      className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10"
    />
  </div>
</div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-white border-t shadow-md py-3">
        {/* Top Section */}
        <div className="fixed top-0 inset-x-0 bg-white shadow-md px-4 py-2">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-bold">Connaught Place</h1>
              <button className="mt-1 px-3 py-1 bg-gray-200 rounded">Locations Name</button>
            </div>
            <Image
    src="/icons/icons8-cart-96 (1).png" // Path to your shopping cart icon
    alt="Cart"
    width={30}
    height={30}
    className="cursor-pointer"
  />
          </div>

          {/* Search Bar for Services */}
          <div className="mt-2">
            <motion.input 
              type="text" 
              className="w-full px-3 py-2 border rounded-md"
              placeholder={`Search for '${typedText}|'`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-around py-3">
          <h1 className="text-sm font-bold"><span>P</span><span className="text-orange-600">X</span></h1>
          <Link href="/beauty" className="text-sm">Beauty</Link>
          <Link href="/panels" className="text-sm">Panels</Link>
          <Link href="/native" className="text-sm">Native</Link>
          <Image
    src="/icons/user (2).png" // Path to your user icon
    alt="User"
    width={30}
    height={30}
    className="cursor-pointer"
  />
        </div>
      </div>
     
    </nav>
    
  );
  
};

export default Navbar;