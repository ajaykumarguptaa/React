import React, { useEffect, useState } from 'react'

export const Project1 = ({passValue}) => {
  const [time,setTime]=useState(0);
  useEffect(()=>{
    setInterval(()=>{
     setTime(new Date().toLocaleTimeString())
    },1000)
  },[])
  return (
    <div style={{border:"2px solid black",height:"100px",width:"300px",borderRadius:"50px",backgroundColor:"black"}}>
      <h3>Current time is:- </h3>
      <h3 style={{color:passValue}}>{time}</h3>
    </div>
  )
}
