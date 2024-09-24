"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Sponsors: React.FC = () => {
  interface Item {
    imageUrl: string;
    text: string;
  }

  const marquees: Item[] = [
    {
      imageUrl: "/s1.png",
      text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024",
    },
    {
      imageUrl: "/s2.png",
      text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024",
    },
    {
      imageUrl: "/s3.png",
      text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024",
    },
    {
      imageUrl: "/nfillogo.png",
      text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024",
    },
  ];

  return (
    <div className="flex flex-col w-80 mt-8 ml-auto mr-auto ">
      <h1 className="flex font-semibold p-2 text-primary text-center text-xl justify-center ">
        Our Sponsors
      </h1>

      <Marquee speed={30} pauseOnHover={true} pauseOnClick={true}>
        {marquees.map((marqueeContent, index) => (
          <Image
            className="w-auto h-16 m-6 "
            key={index}
            src={marqueeContent.imageUrl}
            alt="logo"
            height={500}
            width={500}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Sponsors;
