import React from "react";
import Marquee from "./Marquee";

const logos = [
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd90e91519a09b8b326_awwwards.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd97af8fb6fc9bbb4c6_cssda.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd90e91519a09b8b326_awwwards.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd97af8fb6fc9bbb4c6_cssda.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg",
];

// 20 logos banane ke liye repeat
const logosList = Array(5).fill(logos).flat();

const Marquees = () => {
  return (
    <div className="w-full bg-white py-10 space-y-10">
      <div className="border-y border-gray-200 py-4">
        <Marquee images={logosList} direction="left" speed={80} />
      </div>
      <div className="border-y border-gray-200 py-4">
        <Marquee images={logosList} direction="right" speed={100} />
      </div>
    </div>
  );
};

export default Marquees;
