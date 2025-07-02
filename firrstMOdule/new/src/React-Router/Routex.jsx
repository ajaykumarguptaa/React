import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import  Error from './Error'
const Routex = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/About" element={<h1>About</h1>} />
          <Route path="/Login" element={<h1>Login</h1>} />
          {/* <Route path="/*" element={<Error/>}/> */}
          <Route path="/*" element={<Navigate to="/Login" />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routex;
