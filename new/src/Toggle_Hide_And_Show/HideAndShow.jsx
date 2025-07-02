import React from 'react'
import { useState } from 'react'
import Uses from './Uses'
import { False } from './Uses'


export const HideAndShow = () => {
const [display,setDisplay]=useState(false)

  return (
    <div>

      <hr />
      <h1>Toggle inreact js</h1>
      {
        display?<Uses/>:<False/>
      }

      {/* {
        display?<h1>if state is true<h1/>:<h1>No useState is false </h1>
      } */}
      <button onClick={()=>{setDisplay(!display)}}>Negation</button>
      
    </div>
  )
}
