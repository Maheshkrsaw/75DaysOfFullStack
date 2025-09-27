import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";
import Cards from "../Partials/Cards";
import axios from "../Utils/Axios"; // configured with baseURL & api_key
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  document.title = "FW | POPULAR MOVIES";
  const navigate = useNavigate();

  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Fetch movies from /movie/popular
  const GetPopular = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/movie/popular?page=${page}`);

      if (data.results?.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching popular movies:", error);
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
  }, []);

  return (
    <div className="w-screen h-screen">
      {loading && popular.length === 0 ? (
        <div className="flex justify-center items-center h-[80vh]">
          <ClipLoader color="#36d7b7" size={60} />
        </div>
      ) : (
        <>
          {/* Header + Topnav */}
          <div className="px-[10%] w-full flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-zinc-400 flex items-center gap-2">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer text-2xl"
              ></i>
              Popular Movies
            </h1>

            <Topnav />
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
              <Cards data={popular} title="Movies" />
            </InfiniteScroll>
          </div>
        </>
      )}
    </div>
  );
}

export default Popular;
