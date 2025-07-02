import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Student from './Nested/Student'

const CollageD = () => {
  return (
    <div>     
      <h1>collage</h1>
       <Link to="/">Home</Link>
       <Routes>

        <Route path="/student" element={<Student/>}/>
       </Routes>
      
    </div>
  )
}

export default CollageD