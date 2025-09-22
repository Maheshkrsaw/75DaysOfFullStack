import React, { useEffect } from 'react';
import SideNav from '../Partials/SideNav';

function Home() {
  useEffect(() => {
    document.title = "FILMYWORLD | HOMEPAGE";
  }, []);

  return (
    <div className="flex w-screen h-screen">
      <SideNav />
      <div className="w-[80%] h-full "></div>
    </div>
  );
}

export default Home;
