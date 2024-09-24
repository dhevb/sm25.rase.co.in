// Page.tsx
import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";

import Footer from "@/app/component/Footer";
import Gallery from "@/app/component/Gallery";

const Page: React.FC = () => {
  return (
    <div className="bg-white">
      <TopInfo />
      <NavBar />
      <React.Suspense fallback={<div>Loading...</div>}>
      <Gallery />
      </React.Suspense>
      <Footer />
    </div>
  );
};

export default Page;
