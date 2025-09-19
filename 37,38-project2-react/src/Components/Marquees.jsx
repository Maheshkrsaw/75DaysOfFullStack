import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  var logo = [
    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842910de1189f26accda_jologo-onLight.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg",
    ],
    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842910de1189f26accda_jologo-onLight.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
    ],
  ];

  return (
    <div className="mt-20 py-20 space-y-10">
      <Marquee logourl={logo[0]} direction="left" />
      <Marquee logourl={logo[1]} direction="right" />
    </div>
  );
};

export default Marquees;
