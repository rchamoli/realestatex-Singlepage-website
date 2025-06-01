import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          Mumbai Midtown
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#about" className="text-gray-600 hover:text-black">About</a>
          <a href="#amenities" className="text-gray-600 hover:text-black">Amenities</a>
          <a href="#gallery" className="text-gray-600 hover:text-black">Gallery</a>
          <a href="#floorplans" className="text-gray-600 hover:text-black">Floor Plans</a>
          <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;