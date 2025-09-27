import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";
import Cards from "../Partials/Cards";
import axios from "../Utils/Axios"; // configured with baseURL & api_key
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from "react-infinite-scroll-component";

function TvShows() {
  document.title = "FW | TV SHOWS";
  const navigate = useNavigate();

  const [category, setCategory] = useState("airing_today"); // default
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const categories = [
    { label: "Airing Today", value: "airing_today" },
    { label: "On The Air", value: "on_the_air" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
  ];

  const GetShows = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results?.length > 0) {
        setShows((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    } finally {
      setLoading(false);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setShows([]);
    setHasMore(true);
    GetShows();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return (
    <div className="w-screen min-h-screen bg-[#1F1E24]">
      {/* Header + Dropdown */}
      <div className=" w-full flex items-center justify-between px-[10%] py-5">
        <h1 className="text-2xl font-semibold text-zinc-400 flex items-center gap-2 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer text-2xl"
          ></i>
          TV Shows{" "}
          <span className=" text-sm text-zinc-300">
            -{" "}
            {categories.find((c) => c.value === category)?.label ||
              "Airing Today"}
          </span>
        </h1>

        <div className="px-[2%] w-full flex items-center justify-between">
          <Topnav />
          <Dropdown
            title="Select Category"
            options={categories.map((c) => c.label)}
            selected={
              categories.find((c) => c.value === category)?.label ||
              "Airing Today"
            }
            setSelected={(label) => {
              const selected = categories.find((c) => c.label === label);
              if (selected) setCategory(selected.value);
            }}
          />
        </div>
      </div>

      {/* TV Shows List */}
      {loading && shows.length === 0 ? (
        <div className="flex justify-center items-center h-[80vh]">
          <ClipLoader color="#36d7b7" size={60} />
        </div>
      ) : (
        <div className="w-full bg-[#1F1E24] px-[5%] pb-10">
          <InfiniteScroll
            dataLength={shows.length}
            next={GetShows}
            hasMore={hasMore}
            className="flex flex-wrap justify-start gap-5"
            loader={
              <div className="w-full flex justify-center my-5">
                <ClipLoader color="#36d7b7" size={60} />
              </div>
            }
          >
            <Cards data={shows} title="tv" />
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
}

export default TvShows;
