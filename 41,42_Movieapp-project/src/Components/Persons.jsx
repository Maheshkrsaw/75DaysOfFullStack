import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Partials/Topnav";
import Cards from "../Partials/Cards";
import axios from "../Utils/Axios"; // configured with baseURL & api_key
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from "react-infinite-scroll-component";

function Persons() {
  document.title = "FW | POPULAR PERSONS";
  const navigate = useNavigate();

  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetPersons = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/person/popular?page=${page}`);

      if (data.results?.length > 0) {
        setPersons((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching persons:", error);
    } finally {
      setLoading(false);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setPersons([]);
    setHasMore(true);
    GetPersons();
  };

  useEffect(() => {
    refreshHandler();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-[#1F1E24]">
      {/* Header */}
      <div className="w-full flex mr-20 items-center justify-between gap-4 px-[10%]">
        <h1 className="text-2xl font-semibold text-zinc-400 flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer text-2xl"
          ></i>
          Popular Persons
        </h1>
        <Topnav />
      </div>

      {/* Infinite Scroll Cards */}
      {loading && persons.length === 0 ? (
        <div className="flex justify-center items-center h-[80vh]">
          <ClipLoader color="#36d7b7" size={60} />
        </div>
      ) : (
        <div className="w-full bg-[#1F1E24] px-[5%] pb-10">
          <InfiniteScroll
            dataLength={persons.length}
            next={GetPersons}
            hasMore={hasMore}
            loader={
              <div className="w-full flex justify-center my-5">
                <ClipLoader color="#36d7b7" size={60} />
              </div>
            }
            className="flex flex-wrap justify-start gap-5"
          >
            <Cards data={persons} title="Persons" />
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
}

export default Persons;
