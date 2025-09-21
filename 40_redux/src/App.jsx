import React from "react";
// import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Product from "./Components/Product";
import { Link, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    
      <div className="w-screen h-screen">
        <nav className="py-5 flex justify-center gap-10">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/products">Products</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    
  );
};

export default App;
