import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
      <div className="flex flex-wrap h-full px-[5%] w-full bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link
          className="w-[22%] mx-[1%] mb-5 flex flex-col items-start"
          key={i}
          to="#"
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] w-full object-cover rounded-md"
            src={`https://image.tmdb.org/t/p/original${
              c.poster_path || c.backdrop_path
            }`}
            alt={c.title || c.name || "poster"}
          />
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold truncate w-full">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
