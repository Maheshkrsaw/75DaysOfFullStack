import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";
import Cards from "../Partials/Cards";
import axios from "../Utils/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from "react-infinite-scroll-component";

function Movies() {
  document.title = "FW | MOVIES";
  const navigate = useNavigate();

  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const categories = [
    { label: "Now Playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const GetMovies = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results?.length > 0) {
        setMovies((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setMovies([]);
    setHasMore(true);
    GetMovies();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return (
    <div className="w-screen min-h-screen bg-[#1F1E24]">
      {/* Header + Dropdown */}
      <div className="w-full flex items-center justify-between px-[10%] py-5">
        <h1 className="text-2xl font-semibold text-zinc-400 flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer text-2xl"
          ></i>
          Movies
        </h1>

        <div className="w-full flex items-center justify-between gap-4">
          <Topnav />
          <Dropdown
            title="Select Category"
            options={categories.map((c) => c.label)}
            selected={
              categories.find((c) => c.value === category)?.label ||
              "Now Playing"
            }
            setSelected={(label) => {
              const selected = categories.find((c) => c.label === label);
              if (selected) setCategory(selected.value);
            }}
          />
        </div>
      </div>

      {/* Movies List */}
      {loading && movies.length === 0 ? (
        <div className="flex justify-center items-center h-[80vh]">
          <ClipLoader color="#36d7b7" size={60} />
        </div>
      ) : (
        <div className="w-full bg-[#1F1E24] px-[5%] pb-10">
          <InfiniteScroll
            dataLength={movies.length}
            next={GetMovies}
            hasMore={hasMore}
            className="flex flex-wrap justify-start gap-5"
            loader={
              <div className="w-full flex justify-center my-5">
                <ClipLoader color="#36d7b7" size={60} />
              </div>
            }
          >
            <Cards data={movies} title="movie" />
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
}

export default Movies;
