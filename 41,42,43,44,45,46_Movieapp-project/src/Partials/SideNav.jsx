import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl">FILMYWORLD.</span>
      </h1>

     <nav className="flex flex-col text-zinc-400 text-base gap-3">
  <h1 className="text-white font-semibold text-xl mt-10 mb-5">
    New Feeds
  </h1>

  <Link to="/trending" className="flex items-center gap-2 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
    <i className="ri-fire-fill"></i> Trending
  </Link>

  <Link  to="/popular" className="flex items-center gap-2 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
    <i className="ri-bar-chart-fill"></i> Popular
  </Link>

  <Link  to="/movies" className="flex items-center gap-2 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
    <i className="ri-movie-2-fill"></i> Movies
  </Link>

  <Link to="/tvshows" className="flex items-center gap-2 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
    <i className="ri-tv-fill"></i> TV Shows
  </Link>

  <Link to="/persons" className="flex items-center gap-2 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
    <i className="ri-team-fill"></i> Persons
  </Link>
</nav>

<hr className="border-none h-[1px] bg-zinc-400" />

<nav className="flex flex-col text-zinc-400 text-base gap-3">
  <h1 className="text-white font-semibold text-xl mt-10 mb-5">
    Website information
  </h1>

  <Link className="flex items-center gap-2 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
    <i className="ri-information-2-fill"></i> About FILMYDUNIYA
  </Link>

  <Link className="flex items-center gap-2 hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
    <i className="ri-phone-fill"></i> Contact us
  </Link>
</nav>





    </div>
  );
}

export default SideNav;
