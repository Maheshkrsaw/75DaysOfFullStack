import React, { useEffect, useState } from "react";
import axios from "../Utils/Axios";
import { Link } from "react-router-dom";
// import noimage from "../../public/noimage.jpeg";
const Topnav = () => {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      GetSearches();
    }
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%] ">
      <i className="text-zinc-400 text-3xl ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          className="ri-close-line text-3xl text-zinc-400"
          onClick={() => setquery("")}
        ></i>
      )}
      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
        {search.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
          >
           <img
  className="w-[10vh] h-[10vh] object-cover rounded mr-2"
  src={
    (s.profile_path || s.backdrop_path)
      ? `https://image.tmdb.org/t/p/original/${s.profile_path || s.backdrop_path}`
      : "/noimage.jpeg" // <-- just the path from public root
  }
  alt={s.name || s.title || "No Image"}
/>

            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
