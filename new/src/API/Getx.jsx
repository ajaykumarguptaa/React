import React, { useEffect } from 'react'



const Getx = () => {

   async function GetReq(){
    
  useEffect(()=>{
     
  },[])

     const url='https://dummyjson.com/user'
     let response =await fetch(url);
     response=await response.json()
     console.log(response)
}

  return (
    <div className=''>

    </div>
  )
}

export default Getx