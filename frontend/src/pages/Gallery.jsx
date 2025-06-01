import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";

const images = [img1, img2, img3].map((src) => ({ src }));

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="py-16 bg-gray-50 px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={`Gallery ${i + 1}`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform object-cover w-full h-64"
          />
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={index}
          on={{ view: ({ index }) => setIndex(index) }}
        />
      )}
    </section>
  );
};

export default Gallery;
