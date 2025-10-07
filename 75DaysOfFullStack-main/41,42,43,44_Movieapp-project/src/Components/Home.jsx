import React, { useEffect, useState } from "react";
import SideNav from "../Partials/SideNav";
import Topnav from "../Partials/Topnav";
import Header from "../Partials/Header";
import HorizontalCards from "../Partials/HorizontalCards";
import ClipLoader from "react-spinners/ClipLoader"; // Loader
import axios from "../Utils/Axios";

function Home() {
  document.title = "FILMYWORLD | HOMEPAGE";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [loadingWallpaper, setLoadingWallpaper] = useState(true);
  const [loadingTrending, setLoadingTrending] = useState(true);

  // Fetch wallpaper (runs only once on mount)
  const fetchWallpaper = async () => {
    setLoadingWallpaper(true);
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

  // Fetch trending data (runs whenever category changes)
  const fetchTrending = async (cat) => {
    setLoadingTrending(true);
    try {
      const url =
        cat === "all" ? `/trending/movie/day` : `/trending/${cat}/day`;
      const { data } = await axios.get(url);
      setTrending(data.results || []);
    } catch (err) {
      console.log("Trending fetch error:", err);
      setTrending([]);
    } finally {
      setLoadingTrending(false);
    }
  };

  // Header: fetch only on mount
  useEffect(() => {
    fetchWallpaper();
  }, []);

  // HorizontalCards: fetch when category changes
  useEffect(() => {
    fetchTrending(category);
  }, [category]);

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

        {/* Horizontal trending cards */}
        {loadingTrending ? (
          <div className="flex justify-center items-center h-[30vh]">
            <ClipLoader color="#36d7b7" size={60} />
          </div>
        ) : (
          <HorizontalCards
            data={trending}
            category={category}
            setCategory={setCategory}
            showFilter
          />
        )}
      </div>
    </div>
  );
}

export default Home;
