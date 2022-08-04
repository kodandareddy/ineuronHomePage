import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import HerSection from './HeroSection/HeroSection'
import WhatSection from "./WhatSection/WhatSection";
import SlideShow from "./SlideShow/SlideShow";
import Testimonials from "./Testimonials/Testimonials";
import OurProducts from "./OurProducts/OurProducts";
import TeamPage from "./TeamPage/TeamPage";
import Footer from './Footer/footer'
import Spinner from "./Spinner/Spinner";
const App = (args) => {
 
const [isSpinner,setIsSpinner]=useState(true)

useState(()=>{
  setTimeout(()=>{
    setIsSpinner(false)
  },2000)
},[])
  return (
    <>
   { isSpinner ?<Spinner/>:
     ( 
     <>
     <NavBar/>
      <HerSection/>
      <WhatSection/>
      <SlideShow/>
      <Testimonials/>
      <OurProducts/>
      <TeamPage/>
      <Footer/>
      </>
      )}
    </>
  );
};

export default App;
