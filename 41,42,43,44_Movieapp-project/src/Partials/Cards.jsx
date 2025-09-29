import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  const fallbackImage = "/noimage.jpeg"; // path in public folder

  return (
    <div className="flex flex-wrap h-full px-[5%] w-full bg-[#1F1E24]">
      {data.map((c, i) => {
        // determine image URL
        const imageUrl =
          c.poster_path || c.backdrop_path || c.profile_path
            ? `https://image.tmdb.org/t/p/original${
                c.poster_path || c.backdrop_path || c.profile_path
              }`
            : fallbackImage;

        return (
          <Link
            className="relative w-[22%] mx-[1%] mb-5 flex flex-col items-start"
            key={i}
            to={`/${c.media_type || title}/details/${c.id}`}
          >
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] w-full object-cover rounded-md"
              src={imageUrl}
              alt={c.title || c.name || "poster"}
            />
            <h1 className="text-xl text-zinc-300 mt-3 font-semibold truncate w-full">
              {c.name || c.title || c.original_name || c.original_title}
            </h1>

            {c.vote_average && (
              <div
                className="absolute right-[-9%] bottom-[25%] rounded-full text-xl font-semibold 
             bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center"
              >
                {(c.vote_average * 10).toFixed()} <sup>%</sup>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
