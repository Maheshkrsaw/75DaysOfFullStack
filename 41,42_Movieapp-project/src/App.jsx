import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Trending from './Partials/Trending'

function App() {
  return (
    <>
    <div className='bg-[#1F1F24] w-screen h-screen flex'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/trending" element={<Trending />} />
    </Routes>
    </div>
    </>
  )
}

export default App