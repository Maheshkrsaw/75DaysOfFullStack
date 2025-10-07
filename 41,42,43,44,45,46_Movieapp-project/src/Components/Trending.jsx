import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";
import Cards from "../Partials/Cards";
import axios from "../Utils/Axios"; // your configured axios instance
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();
  document.title = "FW | TRENDING";

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTrending = async () => {
    try {
      setLoading(true);

      // ✅ Correct API call
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results?.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching trending:", error);
    } finally {
      setLoading(false);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setTrending([]);
    setHasMore(true);
    GetTrending();
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return (
    <div className="w-screen h-screen">
      {loading && trending.length === 0 ? (
        <div className="flex justify-center items-center h-[80vh]">
          <ClipLoader color="#36d7b7" size={60} />
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="px-[2%] w-full flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-zinc-400 flex items-center gap-2">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer text-2xl"
              ></i>
              Trending
            </h1>

            <div className="w-full flex mr-20 items-center justify-between gap-4">
              <Topnav />

              {/* ✅ Correct Category Dropdown */}
              <Dropdown
                title="Select Category"
                options={["all", "movie", "tv"]}
                selected={category}
                setSelected={setCategory}
              />

              {/* ✅ Correct Duration Dropdown */}
              <Dropdown
                title="Select Duration"
                options={["day", "week"]}
                selected={duration}
                setSelected={setDuration}
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full bg-[#1F1E24] min-h-screen px-[5%]">
            <InfiniteScroll
              dataLength={trending.length}
              next={GetTrending}
              hasMore={hasMore}
              className="flex flex-wrap justify-start gap-5 mt-5"
              loader={
                <div className="w-full flex justify-center my-5">
                  <ClipLoader color="#36d7b7" size={60} />
                </div>
              }
            >
              <Cards data={trending} title={category} />
            </InfiniteScroll>
          </div>
        </>
      )}
    </div>
  );
}

export default Trending;
