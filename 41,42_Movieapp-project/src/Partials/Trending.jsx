import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import Cards from "./Cards";
import axios from "../Utils/Axios"; // ✅ use your configured axios instance
import ClipLoader from "react-spinners/ClipLoader";

function Trending() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day"); // ✅ lowercase
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetTrending = async () => {
    try {
      setLoading(true); // start loading
      const { data } = await axios.get(`/trending/${category}/${duration}`);
    
      setTrending(data?.results || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // ✅ stop loader
    }
  };

  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  return (
    <div className="w-screen h-screen px-[3%]">
      {loading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <ClipLoader color="#36d7b7" size={60} />
        </div>
      ) : (
        <>
          <div className="w-full flex items-center">
            <h1 className="text-2xl font-semibold text-zinc-400">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer text-2xl"
              ></i>
              Trending
            </h1>
            <div className="flex items-center justify-between w-[90%]">
              <Topnav />

              <Dropdown
                title="Select Category"
                options={["movie", "tv", "all"]}
                selected={category}
                setSelected={setCategory}
              />

              <Dropdown
                title="Select Duration"
                options={["day", "week"]} // ✅ lowercase
                selected={duration}
                setSelected={setDuration}
              />
            </div>
          </div>

          

          <Cards data={trending} title={duration} />
        </>
      )}
    </div>
  );
}

export default Trending;
