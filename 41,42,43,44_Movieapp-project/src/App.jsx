import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import TvShows from "./Components/TvShows";
import Tvdetails from "./Components/Tvdetails";
import Persons from "./Components/Persons";
import Personsdetails from "./Components/Personsdetails";
import Trailer from "./Partials/Trailer";
import Moviedetails from "./Components/Moviedetails";

// ✅ Import ScrollToTopButton
import ScrollToTopButton from "./Partials/ScrollToTopButton";

function App() {
  return (
    <div className="bg-[#1F1F24] w-screen h-screen flex relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        {/* Movies */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>

        {/* TV Shows */}
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>

        {/* Persons */}
        <Route path="/persons" element={<Persons />} />
        <Route path="/person/details/:id" element={<Personsdetails />} />
      </Routes>

      {/* ✅ Scroll To Top Button globally */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
