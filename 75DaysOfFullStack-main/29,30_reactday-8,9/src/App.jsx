import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { Link, Route, Routes } from 'react-router-dom'
import User from './components/User'
import Userdetails from './components/Userdetails'


function App() {
  return (
    <>
    <nav className='mt-5 flex items-center justify-center gap-10'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/user' element={<User />} ></Route>
      <Route path="/user/:id" element={<Userdetails />} > </Route> 
    </Routes>

    </>
  )
}

export default App