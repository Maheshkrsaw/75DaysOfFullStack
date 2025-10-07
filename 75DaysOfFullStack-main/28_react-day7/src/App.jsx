import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Nav from './components/Nav'
import Routing from './utils/Routing'

function App() {
  return (
    <>
      <Nav />

      <Routing />
    </>
  )
}

export default App
