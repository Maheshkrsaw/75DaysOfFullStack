import React from "react";

const Marquee = ({ images, direction = "left" }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-12 w-max ${
          direction === "right"
            ? "animate-marquee-reverse"
            : "animate-marquee"
        }`}
      >
        {/* First batch */}
        {images.map((src, i) => (
          <img
            key={`first-${i}`}
            src={src}
            alt={`logo-${i}`}
            className="h-12 w-auto object-contain"
          />
        ))}
        {/* Duplicate batch (for seamless loop) */}
        {images.map((src, i) => (
          <img
            key={`second-${i}`}
            src={src}
            alt={`logo-dup-${i}`}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
