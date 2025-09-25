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
  const [loading, setLoading] = useState(true); // Track loading

  // Fetch wallpaper
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

  // Fetch trending data
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

  // Fetch data when component mounts or category changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // start loader
      await fetchWallpaper();
      await fetchTrending(category);
      setLoading(false); // stop loader
    };
    fetchData();
  }, [category]);

  return (
    <div className="flex w-screen h-screen">
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden p-5">
        <Topnav />

        {/* Conditional rendering in return */}
        {loading ? (
          <div className="flex justify-center items-center h-[80vh]">
            <ClipLoader color="#36d7b7" size={60} />
          </div>
        ) : (
          <>
            {wallpaper && <Header data={wallpaper} />}
            <HorizontalCards
              data={trending}
              category={category}
              setCategory={setCategory}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
