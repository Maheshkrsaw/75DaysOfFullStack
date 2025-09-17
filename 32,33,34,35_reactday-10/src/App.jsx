import React from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Details from "./Components/Details"; 
import { Route, Routes } from "react-router-dom";
import Create from "./Components/Create";


function App() {
  return (
  <>
    <div className="w-screen h-screen flex"> 
      
          
     
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/details/:id" element={<Details />} />
      </Routes>

    </div>
  </>
  );
}

export default App;
