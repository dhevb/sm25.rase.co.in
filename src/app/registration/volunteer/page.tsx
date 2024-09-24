
import React  from 'react';

import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import  VolReg  from '@/app/component/VolReg'
const ImageUploader: React.FC = () => {
  
  return (
    <div className="bg-white min-h-screen ">
    <TopInfo />
    <NavBar />
    <VolReg/>
    <Footer />
 
    </div>
  );
};

export default ImageUploader;