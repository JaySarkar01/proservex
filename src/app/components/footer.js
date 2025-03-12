import React from "react";
import { motion } from "framer-motion";
// import Aurora from "@/app/components/aurabg";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 bg-black text-white py-10 px-6 md:px-16">
      {/* Background Aurora Effect */}
      {/* <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.6}
        amplitude={1.0}
        speed={0.5}
      /> */}

      {/* Logo Section */}
      <div className="flex gap-3 justify-center items-center">
        <div className="bg-black border p-2 rounded-sm cursor-pointer hover:animate-spin">
          <span className="text-white">P</span>
          <span className="text-orange-600 font-bold">X</span>
        </div>
        <div className="text-lg font-semibold">
          <span>ProServe</span>
          <span className="text-orange-600 font-bold">X</span>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Company Info */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">Company</h2>
          {["About us", "Terms & conditions", "Privacy policy", "Anti-discrimination policy", "Careers"].map((item, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, color: "#FF3232" }}
              className="font-semibold cursor-pointer transition-all"
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Customer Info */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">For customers</h2>
          {["PX reviews", "Categories near you", "Blog", "Contact us"].map((item, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, color: "#FF3232" }}
              className="font-semibold cursor-pointer transition-all"
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Partner Info */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">For partners</h2>
          <motion.span
            whileHover={{ scale: 1.1, color: "#FF3232" }}
            className="font-semibold cursor-pointer transition-all"
          >
            Register as a professional
          </motion.span>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-lg font-bold pb-2">Social links</h1>

          {/* Social Icons */}
          <div className="flex gap-6">
            {[FaTwitter, FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-xl cursor-pointer text-gray-400 hover:text-blue-400 transition-all"
              >
                <Icon />
              </motion.div>
            ))}
          </div>

          {/* Store Links */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {["/appstore.png", "/playstore.png"].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={index === 0 ? "App Store" : "Play Store"}
                className="w-36 md:w-30 h-auto border p-2 rounded-lg shadow-md"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm">
        <span>
          © 2024 ProServeX Company. All rights reserved. | CIN: U74140DL2014PTC276780
        </span>
      </div>
    </div>
  );
};

export default Footer;
