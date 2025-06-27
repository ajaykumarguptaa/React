import React from 'react'
import { useState } from 'react'
import { Counter } from './Counter'

export const State = () => {
  
  const [change,setChange]=useState("Apple")
  const handleClick=()=>{
    setChange("Mango")
  }
  

  return (
    <div>
     <h1>Change State......</h1>
     <h1>{change}</h1>
     <button onClick={()=>handleClick()}>onClick</button>
     <Counter/>
    </div>
  )
}
