import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import { Show } from "./components/Show";

function App() {
  return (
    
      <>
        {/* Navbar */}
        <nav className="flex items-center justify-between p-5 bg-sky-300">
          <h1 className="font-bold text-2xl">My App</h1>
          <div className="flex gap-8 font-semibold">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Show />} />
        </Routes>
      </>
   
  );
}

export default App;
