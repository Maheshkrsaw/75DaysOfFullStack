import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function HorizontalCards({ data, category, setCategory }) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="w-full h-[40vh] p-5">
      {/* Heading + Dropdown */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>

        <Dropdown
          title="Filter"
          options={["tv", "movie", "all"]}
          selected={category}
          setSelected={setCategory}
        />
      </div>

      {/* Horizontal scroll cards */}
      <div className="w-full flex overflow-x-auto space-x-5 h-[30vh] pb-3">
        {data.map((d, i) => (
          <div
            key={i}
            className="w-[200px] bg-zinc-800 p-3 rounded-lg flex-shrink-0 hover:scale-105 hover:shadow-lg duration-300"
          >
            <img
              className="w-full h-[55%] object-cover rounded-md mb-2"
              src={`https://image.tmdb.org/t/p/original${
                d.backdrop_path || d.poster_path || ""
              }`}
              alt={d.title || d.name || "poster"}
            />
            <h1 className="text-lg font-semibold text-white truncate">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="mt-2 text-xs text-zinc-300 line-clamp-3">
              {d.overview ? d.overview.slice(0, 50) : ""}...
              <Link className="text-zinc-900 ml-1 hover:underline">more</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
