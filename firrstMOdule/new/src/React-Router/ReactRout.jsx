import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppClone from "../ContextApi/AppClone";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Routex from "./Routex";

const ReactRout = () => {
  return (
  <>
     <div style={{display:"none"}}>
       <BrowserRouter>
         <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
         <Link to="/contact">Contact</Link>
         <Routes>
           {/* <Route path="/" element={<h1>Home</h1>} />
           <Route path="/about" element={<AppClone/>} />
           <Route path="/contact" element={<h1>Contact</h1>} /> */}
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           
         </Routes>
       </BrowserRouter>
     </div>

     <Routex/>
    </>
  );
};

export default ReactRout;
