import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import ImportantDates from "@/app/component/ImportantDates";
import Footer from "@/app/component/Footer";

const page = () => {
  return (
    <div className="bg-white h-screen">
      <TopInfo />
      <NavBar />
      <ImportantDates/>
      <Footer />
    </div>
    
  );
};

export default page;
