import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import MovieDetails from "./Components/MovieDetails";
import TvShows from "./Components/TvShows";
import Tvdetails from "./Components/Tvdetails";
import Persons from "./Components/Persons";
import Personsdetails from "./Components/Personsdetails";

function App() {
  return (
    <div className="bg-[#1F1F24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        {/* Movies */}
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        {/* TV Shows */}
        <Route path="/tvshows" element={<TvShows />} />{" "}
        <Route path="/tv/details/:id" element={<Tvdetails />} />
        {/* Persons */}
        <Route path="/persons" element={<Persons />} />
        <Route path="/person/details/:id" element={<Personsdetails />} />
      </Routes>
    </div>
  );
}

export default App;
