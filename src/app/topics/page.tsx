import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Topics from "@/app/component/Topics";
import Footer from "@/app/component/Footer";

const page = () => {
  return (
    <div className="bg-white">
      <TopInfo />
      <NavBar />
      <Topics />
      <Footer />
    </div>
  );
};

export default page;
