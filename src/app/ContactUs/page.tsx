import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import ContactUs from "@/app/component/ContactUs";
import Footer from "@/app/component/Footer";

const page = () => {
  return (
    <div className="bg-white h-screen">
      <TopInfo />
      <NavBar />
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default page;
