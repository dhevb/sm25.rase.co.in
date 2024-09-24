import React from "react";
import Marquee from "react-fast-marquee";
import Link from 'next/link';

interface Item {
  imageUrl: string;
  text: string;
  link: string;
}

const items: Item[] = [

  { imageUrl: '/new.gif', text: 'Shiksha Kumbh 2024 Successfully Completed on June 30, 2024 @ NIT Srinagar, To Watch the Event Click Here.', link: 'https://www.youtube.com/watch?v=73I3Knmqun4&ab_channel=ShikshaMahakumbh' },
  { imageUrl: '/new.gif', text: 'Next RASE Conferences of J&K will be held in IIT Jammu. Stay tuned for more updates.', link: '' },
 
  // Add more items as needed
];

const Marquees: React.FC = () => {
    return (
      <div className="bg-[#d0b5b5] flex">
        <div className="bg-[#4c3333] p-2 text-base font-bold text-secondary">Annoucement</div>
  <Marquee pauseOnHover={true}  pauseOnClick={true}>
  <div className="flex flex-wrap pt-2 ">
    
      {items.map((item, index) => (
        <div key={index} className="flex items-center mb-4 ms-4">
        <img src={item.imageUrl} alt="Item Image" className=" mt-1 me-1 object-cover" />
          <Link href={item.link}>
      
          <p className="mr-2 font-semibold text-base  text-[#000] ">{item.text}</p>
         
          </Link>
        </div>
      ))}
    </div>
  </Marquee>
      </div>
     
    );
  };
  
  export default Marquees;