import React from "react";
import heroImg from "../assets/hero.jpg"; // Use your own placeholder or royalty-free image

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Mumbai Midtown</h1>
        <p className="text-lg md:text-2xl mb-8">Luxury Residences in the Heart of the City</p>
        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Enquire Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
