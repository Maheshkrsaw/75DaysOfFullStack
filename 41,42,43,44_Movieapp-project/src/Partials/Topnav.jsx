import React, { useEffect, useState } from "react";
import axios from "../Utils/Axios";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async () => {
    if (!query) {
      setSearchResults([]); // Clear results if query is empty
      return;
    }
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearchResults(data.results || []);
    } catch (error) {
      console.log("Search error: ", error);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  // Handler to clear query and results
  const handleClear = () => {
    setQuery("");
    setSearchResults([]);
  };

  return (
    <div className="z-[100] w-full h-[10vh] relative flex justify-start items-center px-[15%]">
      <i className="text-zinc-400 text-3xl ri-search-2-line"></i>
      <input
        type="text"
        placeholder="Search Anything"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
      />

      {query.length > 0 && (
        <i
          className="ri-close-line text-3xl text-zinc-400 absolute right-[32%] cursor-pointer"
          onClick={handleClear} // clears query + results
        ></i>
      )}

      {searchResults.length > 0 && (
        <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 left-[20%] top-[90%] overflow-auto rounded">
          {searchResults.map((s, i) => (
            <Link
            to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded mr-2"
                src={
                  s.profile_path || s.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${s.profile_path || s.backdrop_path}`
                    : "/noimage.jpeg"
                }
                alt={s.name || s.title || "No Image"}
              />
              <span>{s.name || s.title || s.original_name || s.original_title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
