import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movies from './Components/Movies'
import TvShows from './Components/TvShows'
import Persons from './Components/Persons'

function App() {
  return (
    <>
    <div className='bg-[#1F1F24] w-screen h-screen flex'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvshows" element={<TvShows />} />
      <Route path="/persons" element={<Persons />} />
    </Routes>
    </div>
    </>
  )
}

export default App