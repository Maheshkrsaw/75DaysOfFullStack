// path: 41,42,43,44_Movieapp-project/src/Components/Persons.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";
import Topnav from "../Partials/Topnav";
import Cards from "../Partials/Cards";
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from "react-infinite-scroll-component";

const Persons = () => {
  document.title = "FW | People Shows";
  const navigate = useNavigate();

  const [category, setCategory] = useState("popular");
  const [persons, setPersons] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchPersons = async (p = page) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/person/${category}?page=${p}`);
      if (data.results && data.results.length > 0) {
        setPersons((prev) => (p === 1 ? [...data.results] : [...prev, ...data.results]));
        setPage(p + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching persons:", err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setPersons([]);
    setHasMore(true);
    fetchPersons(1);
  };

  useEffect(() => {
    refreshHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="w-screen min-h-screen bg-[#1F1E24]">
      {/* Header */}
      <div className="w-full flex items-center justify-between px-[10%] py-5">
        <h1 className="text-2xl font-semibold text-zinc-400 flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer text-2xl"
          ></i>
          People
        </h1>

        {/* Topnav + Category Dropdown */}
        <div className="flex items-center gap-4">
          <Topnav />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[#2a2935] text-zinc-400 p-1 rounded"
          >
            <option value="popular">Popular</option>
            <option value="latest">Latest</option>
            <option value="trending">Trending</option>
          </select>
        </div>
      </div>

      {/* Persons List */}
      {loading && persons.length === 0 ? (
        <div className="flex justify-center items-center h-[80vh]">
          <ClipLoader color="#36d7b7" size={60} />
        </div>
      ) : (
        <div className="w-full px-[5%] pb-10">
          <InfiniteScroll
            dataLength={persons.length}
            next={() => fetchPersons()}
            hasMore={hasMore}
            loader={
              <div className="flex justify-center my-5">
                <ClipLoader color="#36d7b7" size={50} />
              </div>
            }
            className="flex flex-wrap justify-start gap-5"
          >
            <Cards data={persons} title="person" />
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
};

export default Persons;
