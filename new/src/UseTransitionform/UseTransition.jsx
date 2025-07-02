import React, { useState } from 'react'


//  by using state

const UseTransition = () => {
  const[pending,setpending]=useState(false);
  const handlebutton=async()=>{
    setpending(true);
    await new Promise(res=>setTimeout(res,2000))
      setpending(false);
  }
  return (
    <div>
       
       <button disabled={pending} onClick={handlebutton}> click</button>
    </div>
  )
}

export default UseTransition