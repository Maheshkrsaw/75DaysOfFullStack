import React, { useEffect, useState } from "react";
import SideNav from "../Partials/SideNav";
import Topnav from "../Partials/Topnav";
import axios from "../Utils/Axios";
import Header from "../Partials/Header";
import HorizontalCards from "../Partials/HorizontalCards";

function Home() {
  document.title = "FILMYWORLD | HOMEPAGE";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all"); // default "all"

  // 1️⃣ Fetch wallpaper (once)
  const fetchWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/movie/day`);
      if (data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setWallpaper(data.results[randomIndex]);
      }
    } catch (err) {
      console.log("Wallpaper fetch error:", err);
    }
  };

  useEffect(() => {
    fetchWallpaper(); // runs only once
  }, []);

  // 2️⃣ Fetch trending based on category
  const fetchTrending = async (cat) => {
    try {
      const url =
        cat === "all" ? `/trending/movie/day` : `/trending/${cat}/day`;
      const { data } = await axios.get(url);
      if (data.results) setTrending(data.results);
      else setTrending([]);
    } catch (err) {
      console.log("Trending fetch error:", err);
      setTrending([]);
    }
  };

  useEffect(() => {
    fetchTrending(category);
  }, [category]);

  return (
    <div className="flex w-screen h-screen">
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden p-5">
        <Topnav />

        {/* Header */}
        {wallpaper && <Header data={wallpaper} />}

        {/* Trending Cards */}
        <HorizontalCards
          data={trending}
          category={category}
          setCategory={setCategory}
        />
      </div>
    </div>
  );
}

export default Home;
