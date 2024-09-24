import React from "react";
import Image from "next/image";
const TopInfo = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#f0e9dd] ">
      <a href="https://www.iitjammu.ac.in/" target="_blank" rel="noopener noreferrer">
        <img
          src="/jnu.svg" // Specify the left logo image path
          alt="Company Logo Left"
          className="p-1 w-20 h-16 md:w-20 md:h-16 lg:w-28 lg:h-28 "         
        />
      </a>
      <div className="text-center">
        <h2 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold">
          {/* NATIONAL CONFERENCE <br /> */}
        </h2>
        <h1 className="text-l md:text-xl lg:text-2xl font-semibold text-black">
        <br />
      
           Shiksha MahaKumbh <br />
           2025
           
           
           <br />
          {/* Role of Academic driven Startups in Developing Economy of J&K <br /> */}
        </h1>
      </div>
      <a href="https://dhe.org.in">
        <img
          src="/sLogo.png" // Specify the right logo image path
          alt="Company Logo Right"
          className="p-1 w-20 h-16 md:w-20 md:h-16 lg:w-28 lg:h-28  "
         
        />
      </a>
    </div>
  );
};

export default TopInfo;
