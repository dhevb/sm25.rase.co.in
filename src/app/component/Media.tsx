"use client"
import Image from 'next/image';
import React from 'react';

const Media: React.FC = () => {

  interface Item {
    imageUrl: string;
    text: string;
  }

  const marquees: Item[] = [
    { imageUrl: '/dainikhindu.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024" },
  ];

  return (
    <div className='flex flex-col w-80 mt-8 ml-auto mr-auto'>
      <h1 className='flex font-semibold p-2 text-primary text-center text-xl justify-center'>Our Media Partner</h1>
      <div className='flex overflow-x-auto'>
        {marquees.map((marqueeContent, index) => (
          <Image
            className='w-100 h-16 m-6'
            key={index}
            src={marqueeContent.imageUrl}
            alt="logo"
            height={500}
            width={1000}
          />
        ))}
      </div>
    </div>
  );
};

export default Media;
