import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import VehicleCategories from "./VehicleCategories/VehicleCategories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <VehicleCategories />
    </>
  );
};

export default Home;
