import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='bg-[#1F1F24] w-screen h-screen flex'>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </div>
    </>
  )
}

export default App