import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function HorizontalCards({ data, category, setCategory, showFilter = false }) {
  if (!data || !Array.isArray(data)) return null;

  const fallbackImage = "/noimage.jpeg"; // make sure noimage.jpeg is in public folder

  return (
    <div className="w-full h-[40vh] p-5">
      {/* Heading + Dropdown */}
      {showFilter && (
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            selected={category}
            setSelected={setCategory}
          />
        </div>
      )}

      {/* Horizontal scroll cards */}
      <div className="w-full flex overflow-x-auto space-x-5 h-[30vh] pb-3">
        {data.map((d, i) => (
          <Link
            key={i}
            to={`/${d.media_type}/details/${d.id}`}
            className="w-[200px] h-[35vh] flex-shrink-0"
          >
            <div className="bg-zinc-800 p-3 rounded-lg hover:scale-105 hover:shadow-lg duration-300 overflow-y-auto">
              <img
                className="w-full h-[55%] object-cover rounded-md mb-2"
                src={
                  d.backdrop_path || d.poster_path
                    ? `https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`
                    : fallbackImage
                }
                alt={d.title || d.name || "poster"}
              />
              <h1 className="text-lg font-semibold text-white truncate">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="mt-2 text-xs text-zinc-300 line-clamp-3">
                {d.overview ? d.overview.slice(0, 50) : ""}...
                <span className="text-zinc-900 ml-1 hover:underline">more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
