import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import LInkdind from "./Nested/LInkdind";
import Collage from "../../Loop_Nested/Collage";
import About from "../About";
import Login from "./Login";
import CollageD from "./CollageD";

const MainPage = () => {
  return (
    <>
    <div style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
      <h1>WebPage</h1>
      <LInkdind/>
    </div>
    <div>
<BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/collage" element={<CollageD/>} />
        </Routes>
      </BrowserRouter>

    </div>
    </>
  );
};

export default MainPage;
