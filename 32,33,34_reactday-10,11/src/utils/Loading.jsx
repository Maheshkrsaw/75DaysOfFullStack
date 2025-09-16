import React from "react";

const UltraLoader = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      <h1 className="text-2xl font-bold text-indigo-600 mb-10 tracking-wide animate-pulse">
        Please wait, fetching products...
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="relative backdrop-blur-md bg-white/40 shadow-lg rounded-3xl p-5 overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

            {/* Image */}
            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mb-6"></div>

            {/* Title */}
            <div className="h-4 bg-gray-200 rounded-lg w-3/4 mb-4"></div>

            {/* Price */}
            <div className="h-4 bg-gray-200 rounded-lg w-1/2 mb-6"></div>

            {/* Button */}
            <div className="h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UltraLoader;
