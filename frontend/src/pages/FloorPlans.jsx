import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import plan1 from "../assets/floorplan1.jpg";
import plan2 from "../assets/floorplan2.jpg";

const plans = [plan1, plan2].map((src) => ({ src }));

const FloorPlans = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="floorplans" className="py-16 bg-white px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Floor Plans</h2>
      <p className="max-w-2xl mx-auto mb-8 text-gray-600">
        Discover thoughtfully designed layouts that blend style, functionality,
        and comfort for modern urban living.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <img
            key={i}
            src={plan.src}
            alt={`Floor Plan ${i + 1}`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform object-cover w-full h-72"
          />
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={plans}
          index={index}
          on={{ view: ({ index }) => setIndex(index) }}
        />
      )}
    </section>
  );
};

export default FloorPlans;
