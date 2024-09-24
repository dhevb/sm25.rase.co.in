import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import PaperSubmission from "@/app/component/Papersubmit";
import Footer from "@/app/component/Footer";

const page = () => {
  return (
    <div className="bg-white">
      <TopInfo />
      <NavBar />
      <PaperSubmission />
      <Footer />
    </div>
  );
};

export default page;
