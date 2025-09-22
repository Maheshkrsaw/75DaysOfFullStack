import React, { useEffect } from "react";
import SideNav from "../Partials/SideNav";
import Topnav from "../Partials/Topnav";

function Home() {
  document.title = "FILMYWORLD | HOMEPAGE";

  return (
    <>
      <div className="flex w-screen h-screen">
        <SideNav />

        <div className="w-[80%] h-full ">
          <Topnav />
        </div>
      </div>
    </>
  );
}

export default Home;
