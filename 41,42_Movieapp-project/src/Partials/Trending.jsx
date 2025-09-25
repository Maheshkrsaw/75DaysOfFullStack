import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";

function Trending() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
   const [duration, setDuration] = useState("");

  return (
    <div className="w-screen h-screen p-[3%]">
      <div className="w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer text-2xl"
          ></i>
          Trending
        </h1>
        <Topnav />
        <Dropdown
          title="Select Category"
          options={["movies", "tv", "all"]}
          selected={category}
          setSelected={setCategory}
         />
         <div></div>
         <Dropdown
        title="Select Duration"
        options={["Week", "Day"]}
        selected={duration}
        setSelected={setDuration}
      />
      </div>
    </div>
  );
}

export default Trending;
