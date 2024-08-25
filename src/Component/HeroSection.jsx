import React from "react";
import Img from "../assets/bgimage.jpeg"
const HeroSection = () => {
  return (
    <section className="backgroundImg relative bg-cover bg-center h-screen">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="container mx-auto relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Discover Spiritual Journeys</h1>
        <p className="text-white text-lg md:text-xl mb-8">Find peace, faith, and enlightenment at the world's most sacred sites.</p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300">Explore Destinations</button>
      </div>
    </section>
  );
};

export default HeroSection;
