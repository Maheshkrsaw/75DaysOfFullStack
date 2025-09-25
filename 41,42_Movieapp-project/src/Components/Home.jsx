import React, { useEffect, useState } from "react";
import SideNav from "../Partials/SideNav";
import Topnav from "../Partials/Topnav";
import axios from "../Utils/Axios";
import Header from "../Partials/Header";
import HorizontalCards from "../Partials/HorizontalCards";
import ClipLoader from "react-spinners/ClipLoader"; // Loader

function Home() {
  document.title = "FILMYWORLD | HOMEPAGE";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [loadingWallpaper, setLoadingWallpaper] = useState(true);

  // 1️⃣ Wallpaper fetch (mount only)
  const fetchWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/movie/day`);
      if (data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setWallpaper(data.results[randomIndex]);
      }
    } catch (err) {
      console.log("Wallpaper fetch error:", err);
    } finally {
      setLoadingWallpaper(false);
    }
  };

  useEffect(() => {
    fetchWallpaper();
  }, []); // [] → only once on mount

  // 2️⃣ Trending fetch (category change)
  const fetchTrending = async (cat) => {
    try {
      const url = cat === "all" ? `/trending/movie/day` : `/trending/${cat}/day`;
      const { data } = await axios.get(url);
      if (data.results) setTrending(data.results);
      else setTrending([]);
    } catch (err) {
      console.log("Trending fetch error:", err);
      setTrending([]);
    }
  };

  useEffect(() => {
    const fetchTrendingData = async () => {
      setLoadingTrending(true);
      await fetchTrending(category);
      setLoadingTrending(false);
    };
    fetchTrendingData();
  }, [category]); // only trending updates when category changes

  return (
    <div className="flex w-screen h-screen">
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden p-5">
        <Topnav />

        {/* Wallpaper */}
        {loadingWallpaper ? (
          <div className="flex justify-center items-center h-[40vh]">
            <ClipLoader color="#36d7b7" size={60} />
          </div>
        ) : (
          wallpaper && <Header data={wallpaper} />
        )}

        {/* HorizontalCards */}
        {loadingTrending ? (
          <div className="flex justify-center items-center h-[30vh]">
            <ClipLoader color="#36d7b7" size={50} />
          </div>
        ) : (
          <HorizontalCards
            data={trending}
            category={category}
            setCategory={setCategory}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
