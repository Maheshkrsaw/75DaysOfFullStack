import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Partials/Dropdown";
import Topnav from "../Partials/Topnav";
import Cards from "../Partials/Cards";
import axios from "../Utils/Axios"; // your configured axios instance
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
    document.title = "FW | POPULAR " ;
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [duration, setDuration] = useState("day"); // lowercase for API
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetPopular = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

      if (data.results?.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching Popular:", error);
    } finally {
      setLoading(false);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setPopular([]);
    setHasMore(true);
    GetPopular();
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return (
    <div className="w-screen h-screen">
      {loading && popular.length === 0 ? (
        <div className="flex justify-center items-center h-[80vh]">
          <ClipLoader color="#36d7b7" size={60} />
        </div>
      ) : (
        <>
          {/* Header + Dropdown */}
          <div className="px-[10%] w-full flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-zinc-400 flex items-center gap-2">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer text-2xl"
              ></i>
              Popular
            </h1>

            <div className="flex justify-between items-center gap-4">
              <Topnav />
              <Dropdown
                title="Select Category"
                options={["movie", "tv", "all"]}
                selected={category}
                setSelected={setCategory}
              />
              <Dropdown
                title="Select Duration"
                options={["day", "week"]}
                selected={duration}
                setSelected={setDuration}
              />
            </div>
          </div>

          {/* Cards with Infinite Scroll */}
          <div className="w-full bg-[#1F1E24] min-h-screen px-[5%] mt-5">
            <InfiniteScroll
              dataLength={popular.length}
              next={GetPopular}
              hasMore={hasMore}
              className="flex flex-wrap justify-start gap-5"
              loader={
                <div className="w-full flex justify-center my-5">
                  <ClipLoader color="#36d7b7" size={60} />
                </div>
              }
            >
              <Cards data={popular} title={category} />
            </InfiniteScroll>
          </div>
        </>
      )}
    </div>
  );
}

export default Popular;
