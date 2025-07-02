import React from 'react'
import {BrowserRouter, Link } from 'react-router'
const LInkdind = () => {
  return (
     <div>
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
      <Link to="/collage">Collage Details</Link>
      </BrowserRouter>
      
    </div>
  )
}

export default LInkdind