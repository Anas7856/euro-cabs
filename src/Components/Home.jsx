import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import VehicleCategories from "./VehicleCategories/VehicleCategories";
import Stats from "./Stats/Stats";
import BestLocation from "./BestLocation/BestLocation";
import FleetSection from "./FleetSection/FleetSection";
import Services from "./Services/Services";
import WhyChoose from "./WhyChoose/WhyChoose";
import HeroBanner from "./HeroBanner/HeroBanner";
import Testimonials from "./Testimonials/Testimonials";
import ImageScroller from "./ImageScroller/ImageScroller";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <BestLocation />
      <FleetSection />
      <Services />
      <HeroBanner />
      <WhyChoose />
      <Testimonials />
      <Footer />
      {/* <ImageScroller /> */}
    </>
  );
};

export default Home;
