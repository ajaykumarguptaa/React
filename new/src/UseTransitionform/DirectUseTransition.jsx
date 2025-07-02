import React, { useTransition } from 'react'

const DirectUseTransition = () => {
  const[pending,startTransition]=useTransition();
  const handlebuttons=()=>{
    startTransition(async ()=>{
      await new Promise(res=>setTimeout(res,5000))
    })
  }
  return (
    <div>
      {
        pending?<img src='https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif' width="200px" />:null
      }
   <button disabled={pending} onClick={handlebuttons}> click here </button>
  
    </div>
  )
}


export default DirectUseTransition