import React from "react";
import Guest from "./Guest";

const guests = [
  {
    id: 1,
    name: "Shri Rajesh Kumar Pathak",
    tracks: "Secretary",
    designation: "Technology Development Board, DST, Ministry of Science and Technology",
    imageSrc: "rajesh.png",
  },
  {
    id: 2,
    name: "Shri Vishad Mafatlal",
    tracks: "Chairman",
    designation: "NFIL Mumbai",
    imageSrc: "vishad.png",
  },
  {
    id: 3,
    name: "Shri Sridhar Vembu",
    tracks: "CEO",
    designation: "Zoho Corporation",
    imageSrc: "zoho.png",
  },
  
  // Add more guests as needed
];

const cheifguests = [
  {
    id: 1,
    name: "Sh. Manoj Sinha",
    tracks: "Hon'ble Lieutenant Governor",
    designation: "J&K",
    imageSrc: "manojsinha.png",
  },
  {
    id: 2,
    name: "Dr. Jitendra Singh (MoS)",
    tracks: "Hon'ble Minister",
    designation: "Earth Sciences & Science and Technology",
    imageSrc: "jitendrasingh.png",
  },
 

  // Add more keynote speakers as needed
];
const speakers = [
  
  {
    id: 1,
    name: "Prof. Rajeev Ahuja",
    tracks: "Director",
    designation: "IIT Ropar",
    imageSrc: "director.png",
  },
  {
    id: 2,
    name: "Dr. Nagarajan Ramamoorthy",
    tracks: "Director",
    designation: "IIM Amritsar",
    imageSrc: "nagarajan.png",
  },
  {
    id: 3,
    name: "Prof. A. Ravinder Nath", 
    tracks: "Director, VC",
    designation: "NIT Srinagar, CU Kashmir",
    imageSrc: "ravindra.png",
  },
  {
    id: 4,
    name: "Dr. M. K. Verma",
    tracks: "Director",
    designation: "CITH Srinagar",
    imageSrc: "mk.png",
  },
  {
    id: 5,
    name: "Prof. Nazeer Ahmed",
    tracks: "Vice-Chancellor",
    designation: "SKUAST",
    imageSrc: "nazir.png",
  },
  {
    id: 6,
    name: "Prof. Deepti Dharmani",
    tracks: "Vice-Chancellor",
    designation: "Chaudhary Bansi Lal University, Bhiwani",
    imageSrc: "dipti.png",
  },
  {
    id: 7,
    name: "PROF. R. N. YADAVA",
    tracks: "VC",
    designation: "Purnea University",
    imageSrc: "purnea.png",
  },
  {
    id: 8,
    name: "Prof. Dr. Madhukarbhai S. Padvi",
    tracks: "First VC",
    designation: "BMTU, Rajpipla",
    imageSrc: "mcpadvi.png",
  },
  // {
  //   id: 9,
  //   name: "Prof. Dr. Kishorsinh Chavda",
  //   tracks: "VC",
  //   designation: "VNSGU, Surat",
  //   imageSrc: "chavda.png",
  // },
  {
    id: 10,
    name: "Shri Raghunandan",
    tracks: "Organising Secretary",
    designation: "Vidya Bharti - Ucch Shiksha Sansthan",
    imageSrc: "raghunandan.png",
  },
  {
    id: 11,
    name: "Shri Atul Kothari",
    tracks: "National Secretary",
    designation: "Shiksha Sanskriti Utthan Nyas",
    imageSrc: "atulkothari.png",
  },
  {
    id: 12,
    name: "Dr. Parikshat Singh Manhas",
    tracks: "Chairman",
    designation: "Board of School Education, J&K",
    imageSrc: "vrikshat.jpg",
  },
  {
    id: 13,
    name: "Major General PBS Lamba",
    tracks: "Major General",
    designation: "Indian Army",
    imageSrc: "pbs.png",
  },
  {
    id: 14,
    name: "Shri Ketan Kabutarwala",
    tracks: "Director",
    designation: "Colourtex Industries Pvt. Ltd., Surat",
    imageSrc: "ketan.png",
  },
  {
    id: 15,
    name: "Dr. Sudipto Chakraborty",
    tracks: "Director",
    designation: "NFIL Mumbai",
    imageSrc: "sudipto.png",
  },
  {
    id: 16,
    name: "Ms. Sweta Sahu",
    tracks: "Director",
    designation: "T.I.M.E. Greater Noida",
    imageSrc: "sweta.png",
  },
  {
    id: 17,
    name: "Shri Vipul Gupta",
    tracks: "Founder-Director",
    designation: "Reequil Chandigarh",
    imageSrc: "vipul.png",
  },
  {
    id: 18,
    name: "Shri Mandeep Tiwari",
    tracks: "Director",
    designation: "Wintek Prelam",
    imageSrc: "mandeep.jpg",
  },
  {
    id: 19,
    name: "Shri Varun Sharma",
    tracks: "Director",
    designation: "Vertus Agro-solutions Pvt Ltd, Delhi",
    imageSrc: "varun.jpg",
  },
  {
    id: 20,
    name: "Ms. Anu Singh",
    tracks: "Director",
    designation: "TCL Labs",
    imageSrc: "anusingh.jpg",
  },
  {
    id: 21,
    name: "Mr. Abhinay Sharma",
    tracks: "Founder",
    designation: "Abhinay Maths",
    imageSrc: "abhinay.jpg",
  },
  {
    id: 22,
    name: "Dr. Sharan Kumar Shetty",
    tracks: "Asean Group",
    designation: "Malaysia",
    imageSrc: "sharan.jpg",
  },
  {
    id: 23,
    name: "Shri Deshraj Sharma",
    tracks: "General Secretary",
    designation: "Vidya Bharti (North Zone)",
    imageSrc: "deshraj.png",
  },
  {
    id: 24,
    name: "Prof. (Dr.) Adarsh Pal Vig",
    tracks: "Chairman",
    designation: "Punjab Pollution Control Board (PPCB)",
    imageSrc: "adrashpal.png",
  },
  {
    id: 25,
    name: "Prof. Unnat P. Pandit",
    tracks: "Controller General of Patents, Designs and Trademarks",
    designation: "CGPDTM",
    imageSrc: "unnat.png",
  },
  {
    id: 26,
    name: "Mr. Vijay Nadda",
    tracks: "Organizing Secretary",
    designation: "Vidya Bharti (North Zone)",
    imageSrc: "nadda.png",
  },
 
  // Add more keynote speakers as needed
];

const GuestList: React.FC = () => {
  return (
    <div className="p-4">
      
      <div className="p-4">
      <p className="text-2xl text-red-800 text-center uppercase font-bold mb-4">Chief Guests</p>
      <div className="flex flex-wrap">
        {cheifguests.map((guest) => (
          <div key={guest.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Guest {...guest} />
          </div>
        ))}
      </div>
      </div>
      <div className="p-4">
      <p className="text-2xl text-red-800 text-center uppercase font-bold mb-4">Guests of Honour</p>
      <div className="flex flex-wrap">
        {guests.map((guest) => (
          <div key={guest.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Guest {...guest} />
          </div>
        ))}
      </div>
      </div>
      <div className="p-4">
      <p className="text-2xl text-red-800 text-center uppercase font-bold mb-4">KeyNote Speakers</p>
      <div className="flex flex-wrap">
        {speakers.map((guest) => (
          <div key={guest.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Guest {...guest} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default GuestList;
