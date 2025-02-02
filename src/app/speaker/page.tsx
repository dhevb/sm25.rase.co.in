import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import GuestList from "../component/GuestList";

const page = () => {
  return (
    <div className="bg-white h-screen">
      <TopInfo />
      <NavBar />
      <div className="p-4">
      <GuestList/>
      </div>
      <Footer />
    </div>
    
  );
};

export default page;
