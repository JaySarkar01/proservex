import React from "react";

const banners = [
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739285485319-64de2f.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739273872613-e17f9a.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1738923391058-e7e328.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1739446520424-115c7c.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1740122254046-ac37a2.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1740122263560-94a5d6.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1740120555849-f49dc0.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1740121199257-46b6a1.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1738335976393-c3b743.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1738335993396-44f3a7.jpeg",
];

export default function Banner() {
  return (
    <div className="w-full mx-auto px-6 md:px-10">
      {banners.map((src, index) => (
        <div key={index} className="w-full flex justify-center mb-8">
          {/* Visible only on Mobile & Tablets */}
          <div className="lg:hidden w-full h-auto overflow-hidden">
            <img
              src={src}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              alt={`Mobile Banner ${index + 1}`}
              onClick={() => console.log(`Mobile Banner ${index + 1} Clicked`)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
