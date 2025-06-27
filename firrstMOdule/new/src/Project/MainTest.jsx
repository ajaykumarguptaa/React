import React, { useState ,useEffect} from 'react'
import { Project1 } from './Project1';

const MainTest = () => {
  const[color,setcolor]=useState("")
   
    return (
      <div>
        <select name="" id="" onChange={(e)=>setcolor(e.target.value)} defaultValue={"green"}>
          <option value="green">Green</option>
          <option value="skyblue">Blue</option>
          <option value="red">Red</option>
        </select>
        <h3>selected value: {color}</h3>
        <Project1 passValue={color}/>
      </div>
    )
}

export default MainTest