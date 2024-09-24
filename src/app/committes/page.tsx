import React from "react";
import TopInfo from "../component/TopInfo";
import NavBar from "../component/NavBar";
import Commites from "../component/Commites";
import Footer from "../component/Footer";
const lac = [
  {
    name: "Mr. Vijay Nadda",
    designation: "Vidya Bharti (NZ)",
    sNo: "1",
  },
  {
    name: "Mr. Balkishan",
    designation: "Vidya Bharti (NZ)",
    sNo: "2",
  },
  {
    name: "Mr. Desh Raj",
    designation: "Vidya Bharti (NZ)",
    sNo: "3",
  },
  {
    name: "Mr. Parveen Saini, IAS (Retd.)",
    designation: "Vidya Bharti (NZ)",
    sNo: "4",
  },
  {
    name: "Mr. Manoj Singhal",
    designation: "DHE",
    sNo: "5",
  },
  {
    name: "Dr. Amit Kansal",
    designation: "NHPC",
    sNo: "6",
  },
  {
    name: "Er. Ved Bhushan Sharma",
    designation: "BSS, J&K",
    sNo: "7",
  },
  {
    name: "Er. Hari Bhushan",
    designation: "BSS, J&K",
    sNo: "8",
  },
  {
    name: "Dr. Manoj",
    designation: "BSS, J&K",
    sNo: "9",
  },
  {
    name: "Dr. Amit Kumar",
    designation: "SKUAST, Kashmir",
    sNo: "10",
  },
  {
    name: "Prof. M. K. Sharma",
    designation: "SKUAST, Kashmir",
    sNo: "11",
  },
  {
    name: "Prof. Aijaz Ahmad",
    designation: "University of Kashmir",
    sNo: "12",
  },
  {
    name: "Prof. Kartar Chand Sharma",
    designation: "Kashmir University",
    sNo: "13",
  },
  {
    name: "Dr. Omchand Sharma",
    designation: "CITH Srinagar",
    sNo: "14",
  },
  {
    name: "Dr. Yogesh Pandey",
    designation: "SKAUST Kashmir",
    sNo: "15",
  },
  {
    name: "Dr. Sunil Kumar",
    designation: "SKAUST Kashmir",
    sNo: "16",
  },
  {
    name: "Dr. Manoj Kumar",
    designation: "CITH Srinagar",
    sNo: "17",
  },
  {
    name: "Maj. Gen. Suresh Kumar Khajuria (Retd.)",
    designation: "SES, Punjab",
    sNo: "18",
  },
];

const oc = [
  {
    name: "Dr. Yashwant Mehta",
    designation: "NIT Srinagar",
    sNo: "1",
  },
  {
    name: "Dr. H. S. Pali",
    designation: "NIT Srinagar",
    sNo: "2",
  },
  {
    name: "Dr. Jitendra Gurjar",
    designation: "NIT Srinagar",
    sNo: "3",
  },
  {
    name: "Dr. R. P. Shukla",
    designation: "NIT Srinagar",
    sNo: "4",
  },
  {
    name: "Dr. Pankaj Kumar",
    designation: "CU, Himachal Pradesh",
    sNo: "5",
  },
  {
    name: "Mr. Saurabh Sharma",
    designation: "IKGPTU, Kapurthala",
    sNo: "6",
  },
  {
    name: "Adv. Poonam Thakur",
    designation: "DHE, Mohali",
    sNo: "7",
  },
  {
    name: "Dr. Pratibha Gupta",
    designation: "DHE, Mohali",
    sNo: "8",
  },
  {
    name: "Col. K. K. Kakkar",
    designation: "DHE, Mohali",
    sNo: "9",
  },
  {
    name: "Dr. Gurmeet Singh",
    designation: "University of Kashmir",
    sNo: "10",
  },
  {
    name: "Dr. Praveen Sharma",
    designation: "University of Kashmir",
    sNo: "11",
  },
  {
    name: "Dr. Bhawani Singh",
    designation: "University of Jammu",
    sNo: "12",
  },
  {
    name: "Mr. Mandeep Tiwari",
    designation: "DHE, Mohali",
    sNo: "13",
  },
  {
    name: "Dr. Ramjit",
    designation: "CU, Kashmir",
    sNo: "14",
  },
];

const s = [
  {
    name: "Prof. Manjit Bansal",
    designation: "MRS PTU",
    sNo: "1",
  },
  {
    name: "Prof. Yashwant Mehta",
    designation: "NIT Srinagar",
    sNo: "2", // Assuming you want to continue numbering
  },
  {
    name: "Dr. Saad Parvez",
    designation: "IIEDC, NIT Srinagar",
    sNo: "3",
  },
];

const cjs = [
  {
    name: "Dr. Praveen Kumar Sharma",
    designation: "CU, Jammu",
    sNo: "1",
  },
  {
    name: "Dr. Vijay Kumar",
    designation: "NIT Srinagar",
    sNo: "2",
  },
  {
    name: "Dr. Ranjeet Kumar Rout",
    designation: " NIT Srinagar",
    sNo: "3",
  },
  {
    name: "Dr. Naresh Kumar",
    designation: "CU, Jammu",
    sNo: "4",
  },
];

// Additional members
const cc = [
  {
    name: "Dr. Harveer Singh Pali",
    designation: "NIT Srinagar",
    sNo: "1",
  },
  {
    name: "Dr. Neeraj Gupta",
    designation: "NIT Srinagar",
    sNo: "2",
  },
  {
    name: "Mr. Shahid Abbas Mir",
    designation: "NIT Srinagar",
    sNo: "3",
  },
];

const advisoryCom = [
  {
    name: "Prof. Nilofer Khan",
    designation: "Vice-Chancellor, University of Kashmir",
    sNo: "1",
  },
  {
    name: "Prof. Nazir Ah. Ganai",
    designation: "Vice-Chancellor, SKUAST Srinagar",
    sNo: "2",
  },
  {
    name: "Prof. A. Ravinder Nath",
    designation: "Vice Chancellor, Central University, Kashmir",
    sNo: "3",
  },
  {
    name: "Prof. Qayyum Hussain",
    designation: "Vice Chancellor, Cluster University Kashmir",
    sNo: "4",
  },
  {
    name: "Prof. Sanjeev Jain",
    designation: "Vice-Chancellor, Central University, Jammu",
    sNo: "5",
  },
  {
    name: "Prof. B.S. Sahay",
    designation: "Director, IIM Jammu",
    sNo: "6",
  },
  {
    name: "Dr. Manoj Singh Gaur",
    designation: "Director, IIT Jammu",
    sNo: "7",
  },
  {
    name: "Dr. Shakti Kumar Gupta",
    designation: "Director, AIIMS Jammu",
    sNo: "8",
  },
  {
    name: "Prof. Bechan Lal",
    designation: "Vice-Chancellor, Cluster University Jammu",
    sNo: "9",
  },
  {
    name: "Prof. Pragati Kumar",
    designation: "Vice-Chancellor, SMVDU",
    sNo: "10",
  },
  {
    name: "Prof. Akbar Masood",
    designation: "Vice-Chancellor, BGSBU",
    sNo: "11",
  },
  {
    name: "Dr. B.N. Tripathi",
    designation: "Vice-Chancellor, SKUAST, Jammu",
    sNo: "12",
  },
  {
    name: "Prof. Umesh Rai",
    designation: "Vice-Chancellor, University of Jammu",
    sNo: "13",
  },
  {
    name: "Lt. Gen. Dr. Anup Banerji",
    designation: "Director, AIIMS Kashmir",
    sNo: "14",
  },
  {
    name: "Prof. S. K. Mehta",
    designation: "Vice-Chancellor, University of Ladakh",
    sNo: "15",
  },
  {
    name: "Mr. A Rajarajan",
    designation: "Director, Satish Dhawan Space Centre",
    sNo: "16",
  },
  {
    name: "Prof. Shantanu Bhattacharya",
    designation: "Director, CSIO",
    sNo: "17",
  },
  {
    name: "Prof. Rajeev Ahuja",
    designation: "Director, IIT Ropar",
    sNo: "18",
  },
  {
    name: "Prof. Bhola Ram Gurjar",
    designation: "Director, NITTTR Chandigarh",
    sNo: "19",
  },
  {
    name: "Prof. R. P. Tiwari",
    designation: "Vice-Chancellor, CU Punjab",
    sNo: "20",
  },
  {
    name: "Dr. Kumar Gaurav",
    designation: "Dy. Director, PGI",
    sNo: "21",
  },
  {
    name: "Prof. Arvind",
    designation: "Vice-Chancellor, Punjabi University",
    sNo: "22",
  },
  {
    name: "Prof. Adarsh Pal Vij",
    designation: "Chairman, Punjab Pollution Control Board",
    sNo: "23",
  },
  {
    name: "Prof. B. R. Kamboj",
    designation: "Vice-Chancellor, HAU",
    sNo: "24",
  },
  {
    name: "Prof. S. K. Mehta",
    designation: "Vice-Chancellor, UOL",
    sNo: "25",
  },
  {
    name: "Prof. C. C. Tripathi",
    designation: "Director, NITTTR Bhopal",
    sNo: "26",
  },
  {
    name: "Prof. Anupam Shukla",
    designation: "Director, NIT Surat",
    sNo: "27",
  },
  {
    name: "Prof. K. P. Singh",
    designation: "Vice-Chancellor, MJP Rohilkhand University",
    sNo: "28",
  },
  {
    name: "Prof. Lalit Kumar Avasthi",
    designation: "Director, NIT Uttarakhand",
    sNo: "29",
  },
  {
    name: "Prof. Pawan Kumar Singh",
    designation: "Director, IIM Trichy",
    sNo: "30",
  },
  {
    name: "Prof. Rama Shanker Verma",
    designation: "Director, MNNIT Allahabad",
    sNo: "31",
  },
  {
    name: "Prof. M. S. Padvi",
    designation: "Vice-Chancellor, BMTU",
    sNo: "32",
  },
  {
    name: "Prof. K.N. Natwarsinh Chawda",
    designation: "Vice-Chancellor, VNSGU",
    sNo: "33",
  },
  {
    name: "Prof. Raj Nath Yadava",
    designation: "Vice-Chancellor, Purnea University",
    sNo: "34",
  },
  {
    name: "Prof. Amar P. Garg",
    designation: "Vice-Chancellor, Shobhit University",
    sNo: "35",
  },
  {
    name: "Dr. G.C. Bhimani",
    designation: "Vice-Chancellor, Saurashtra University, Rajkot",
    sNo: "36",
  },
  {
    name: "Dr. Rajnish Arora",
    designation: "Ex-VC, IKGPTU",
    sNo: "37",
  },
  {
    name: "Prof. Binod Kumar Kanaujia",
    designation: "Director, NIT Jalandhar",
    sNo: "38",
  },
  {
    name: "Mr. Kashmiri Lal",
    designation: "Org. Secretary, Swadeshi Jagran Manch",
    sNo: "39",
  },
  {
    name: "Mr. Raghunandan",
    designation: "Org. Secretary, VB- Ucch Shiksha Sansthan",
    sNo: "40",
  },
  {
    name: "Mr. Satish Kumar",
    designation: "Joint Org. Secretary, Swadeshi Jagran Manch",
    sNo: "41",
  },
  {
    name: "Dr. Jaideep Arya",
    designation: "Chairman, Yog Aayog, Haryana",
    sNo: "42",
  },
  {
    name: "Mr. Prateek Kishore",
    designation: "Director, TBRL/DRDO",
    sNo: "43",
  },
  {
    name: "Prof. Vidyadhar Subudhi",
    designation: "Director, NIT Warangal",
    sNo: "44",
  },
  {
    name: "Prof. H. M. Suryawanshi",
    designation: "Director, NIT Hamirpur",
    sNo: "45",
  },
  {
    name: "Prof. O. R. Jaiswal",
    designation: "Director, NIT Goa",
    sNo: "46",
  },
  {
    name: "Prof. K. K. Shukla",
    designation: "Director, MANIT Bhopal",
    sNo: "47",
  },
  {
    name: "Prof. M. C. Govil",
    designation: "Director, NIT Sikkim",
    sNo: "48",
  },
  {
    name: "Prof. Gautam Sutradhar",
    designation: "Director, NIT Jamshedpur",
    sNo: "49",
  },
  {
    name: "Prof. Ajay Sharma",
    designation: "Director, NIT Delhi",
    sNo: "50",
  },
  {
    name: "Prof. Venu Gopal",
    designation: "Director, NIT Nagaland",
    sNo: "51",
  },
  {
    name: "Prof. Sathans",
    designation: "Dean, NIT Kurukshetra",
    sNo: "52",
  },
  {
    name: "Prof. Ramana Rao",
    designation: "Director, NIT Raipur",
    sNo: "53",
  },
  {
    name: "Prof. N. P. Padhy",
    designation: "Director, MNIT Jaipur",
    sNo: "54",
  },
  {
    name: "Prof. Prasad Krishna",
    designation: "Director, NIT Calicut",
    sNo: "55",
  },
  {
    name: "Prof. Laxmidhar Behera",
    designation: "Director, IIT Mandi",
    sNo: "56",
  },
  {
    name: "Prof. Shreepad Karmakar",
    designation: "Director, IIT Bhubaneswar",
    sNo: "57",
  },
  {
    name: "Prof. V. R. Desai",
    designation: "Director, IIT Dharwad",
    sNo: "58",
  },
  {
    name: "Prof. Tripta Thakur",
    designation: "Director General, NPTI Faridabad",
    sNo: "59",
  },
  {
    name: "Prof. Usha",
    designation: "Director, NITTTR Chennai",
    sNo: "60",
  },
  {
    name: "Prof. Rajive Kumar",
    designation: "Member Secretary, AICTE",
    sNo: "61",
  },
  {
    name: "Prof. S. N. Sachdeva",
    designation: "VC, Kurukshetra University Kurukshetra",
    sNo: "62",
  },
  {
    name: "Prof. Rajbir Singh Lohan",
    designation: "VC, MD University, Rohtak",
    sNo: "63",
  },
  {
    name: "Prof. Dinesh Aggarwal",
    designation: "Gurugram University, Gurgaon",
    sNo: "64",
  },
  {
    name: "Prof. S. K. Tomar",
    designation: "VC, J C Bose UST, Faridabad",
    sNo: "65",
  },
  {
    name: "Prof. Ranpal Singh",
    designation: "VC, Ch. Ranbir Singh University, Jind",
    sNo: "66",
  },
  {
    name: "Prof. Ajmer Singh Malik",
    designation: "VC, Ch. Devi Lal University, Sirsa",
    sNo: "67",
  },
  {
    name: "Prof. Sudesh",
    designation: "VC, BPS Women University, Sonepat",
    sNo: "68",
  },
  {
    name: "Prof. Tankeshwar Kumar",
    designation: "VC, Central University Haryana",
    sNo: "69",
  },
  {
    name: "Prof. Sushma Yadav",
    designation: "PVC, Central University Haryana",
    sNo: "70",
  },
  {
    name: "Prof. S. P. Singh",
    designation: "VC, DCRUST",
    sNo: "71",
  },
  {
    name: "Prof. Baldev Setia",
    designation: "Director, PEC, Chandigarh",
    sNo: "72",
  },
  {
    name: "Prof. Deepti Dharmani",
    designation: "DHE, Mohali",
    sNo: "73",
  },
];

const page = () => {
  return (
    <div>
      <TopInfo />
      <NavBar />
      <Commites title="LOCAL ADVISORY COMMITTEE " members={lac} />
      <Commites title="ORGANIZING COMMITTEE " members={oc} />
      <Commites title="CONFERENCE SECRETARIES " members={s} />
      <Commites title="CONFERENCE JOINT SECRETARIES " members={cjs} />
      <Commites title="CONFERENCE CONVENERS" members={cc} />
      <Commites title="NATIONAL ADVISORY COMMITTEE " members={advisoryCom} />
      <Footer />
    </div>
  );
};

export default page;
