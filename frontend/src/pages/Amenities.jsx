import React from "react";
import { FaSwimmer, FaDumbbell, FaSpa, FaChild } from "react-icons/fa";

const amenities = [
  { icon: <FaSwimmer size={40} />, label: "Swimming Pool" },
  { icon: <FaDumbbell size={40} />, label: "Fitness Center" },
  { icon: <FaSpa size={40} />, label: "Spa & Wellness" },
  { icon: <FaChild size={40} />, label: "Children's Play Area" },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-16 bg-white text-center px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {amenities.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="text-blue-600">{item.icon}</div>
            <p className="text-lg font-medium text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;