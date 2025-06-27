import React, { useState } from 'react'

export const Counter = () => {
  const[conter,setCount]=useState(0)
  const handleCountSub=()=>{
    if(conter!=0){
      setCount(conter-1)
    }else{
      setCount(0);
    }
  }
  const handleCounterAdd=()=>{
   setCount(conter+1)
  }
  return (
    <div>
      <h1>Value: {conter}</h1>
      <button onClick={()=>handleCounterAdd()}>Add</button>
      <button onClick={()=>handleCountSub()}>Sub</button>
    </div>
  )
}
