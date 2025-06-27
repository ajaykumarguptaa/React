import React, { use } from 'react'
import { useState } from 'react'
const HideShow = () => {
const [count,setcount]=useState(0);
const [display,setdisplay]=useState(true);

  return (
    
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}></button>
      {
        count==0?<h1>condition 0</h1>:
        count==1?<h1>condition 1</h1>:
        count==2?<h1>condition 2</h1>:
        count==3?<h1>condition 3</h1>:
        count==4?<h1>condition 4</h1>:
        null
      }
     
     <h1>Hide ANd show</h1>
     {
      display?<div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit in soluta nisi cumque asperiores debitis placeat, id perspiciatis repudiandae? Laborum tempore a vero eaque incidunt facere illo laudantium doloribus minima?</h1>
       </div>:null
     }
     <button onClick={()=>setdisplay(!display)}>show</button>
       

    </div>
  )
}

export default HideShow