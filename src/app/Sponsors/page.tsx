import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Sponsor from "@/app/component/Sponsor";
import Footer from "@/app/component/Footer";
import Sponsors from "../component/Sponsors";

const page = () => {
  return (
    <div className="bg-white">
      <TopInfo />
      <NavBar />
      <Sponsor />
      {/* <Sponsors /> */}
      <Footer />
    </div>
  );
};

export default page;
