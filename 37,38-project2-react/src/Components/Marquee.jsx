import React from "react";

const Marquee = ({ logourl, direction = "left", speed = 5 }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex gap-10 py-5 w-max
          ${direction === "left" ? "animate-marquee" : "animate-marquee-reverse"}`}
        style={{ animationDuration: `${speed}s` }} // 👈 fast speed
      >
        {Array(3).fill(null).map((_, i) =>
          logourl.map((url, index) => (
            <img
              src={url}
              key={`${i}-${index}`}
              className="h-12 object-contain"
              alt=""
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Marquee;
