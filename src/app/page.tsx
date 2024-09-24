"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import TopInfo from "./component/TopInfo";
import NavBar from "./component/NavBar";
import SlideShow from "./component/SlideShow";
import Info from "./component/Info";
import Footer from "./component/Footer";
import Organiger from "./component/Organiger";
import Marquees from "./component/Marquees";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Client-only component to handle screen size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== "undefined" && window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Home: React.FC = () => {
  const slides1 = [
    {
      src: "/2024K/k6.jpg",
      alt: "Image 1",
      legend: "Prof. Rajeev Ahuja and Dr. Thakur SKR invited Smt. Droupadi Murmu, the Hon’ble President of Bharat, for the Shiksha Mahakumbh 2024",
    },
    
  ];

  const pageVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };

  const TransitionWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    );
  };

  const isMobile = useIsMobile();

  const MobileView = () => (
    <div className="flex flex-col space-y-4 bg-[#ebf0f994] items-center">
      <TransitionWrapper>
        <SlideShow slides={slides1} />
      </TransitionWrapper>
      <TransitionWrapper>
        <Info />
      </TransitionWrapper>
    </div>
  );

  const DesktopView = () => (
    <div className="flex flex-row space-x-4">
      <div className="w-1/5"></div>
      <div className="w-3/5">
        <TransitionWrapper>
          <SlideShow slides={slides1} />
        </TransitionWrapper>
        <TransitionWrapper>
          <Info />
        </TransitionWrapper>
        <TransitionWrapper>
          <Organiger />
        </TransitionWrapper>
      </div>
      <div className="w-1/5"></div>
    </div>
  );

  return (
    <div className="bg-[#f3f8ff8a]">
      <TopInfo />
      <NavBar />
      <Marquees />
      <div>
        {/* Show Mobile or Desktop View based on screen size */}
        <div className="sm:hidden">
          <MobileView />
        </div>
        <div className="hidden sm:block">
          <DesktopView />
        </div>
      </div>
      <div className="sm:hidden">
        <Organiger />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
