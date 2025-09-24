import React, { useEffect, useState } from "react";
import SideNav from "../Partials/SideNav";
import Topnav from "../Partials/Topnav";
import axios from "../Utils/Axios";
import Header from "../Partials/Header";

function Home() {
  document.title = "FILMYWORLD | HOMEPAGE";
  const [wallpaper, setWallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/movie/day`);
      if (data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setWallpaper(data.results[randomIndex]);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    if (!wallpaper) GetHeaderWallpaper();
  }, [wallpaper]);

  return (
    <div className="flex w-screen h-screen">
      <SideNav />
      <div className="w-[80%] h-full">
        <Topnav />
        {wallpaper && <Header data={wallpaper} />}
      </div>
    </div>
  );
}

export default Home;
