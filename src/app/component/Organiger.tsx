"use client"
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Organiger: React.FC = () => {

  interface Item {
    imageUrl: string;
    text: string;
    link: string;
  }

  const marquees: Item[] = [

  { imageUrl: '/l1.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l2.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l3.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l4.webp', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  // { imageUrl: '/l5.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l6.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l7.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l8.jpg', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l9.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l10.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' }, 
  { imageUrl: '/l11.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l12.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l13.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l14.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l15.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l16.jpg', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l17.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l18.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l19.webp', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l20.png', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l21.jpg', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l22.jpg', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  { imageUrl: '/l23.jpg', text: "Shiksha Mahakumbh - IIT Ropar, 4-6  October, 2024", link: 'https://www.youtube.com/watch?v=FFfdSd8_XOw' },
  
  ];

  return (
    <div  className='flex flex-col w-full'>
     <h1 className='flex font-semibold p-2 text-primary text-center text-xl justify-center '>Co-organizer</h1>

      <Marquee  pauseOnHover={true}  pauseOnClick={true}>
        {marquees.map((marqueeContent,index) => (
          <Image
          className='w-16 h-16 m-6 '
          key={index}
          src={marqueeContent.imageUrl}
          alt ="logo"
          height={500}
          width={500}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Organiger;