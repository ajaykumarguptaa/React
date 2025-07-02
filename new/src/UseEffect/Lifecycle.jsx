import React, { useEffect } from 'react'

const Lifecycle = ({Data,counter}) => {
   
  useEffect(()=>{
    console.log("mounting phase only!!")
  },[])
   useEffect(()=>{
    console.log("update phase only!!")
  },[counter])

   useEffect(()=>{
    return()=>
    {console.log("UN-mounting phase only!!")}
    
  },[])
  return (
    <div>
      
       <h3 >Data:{Data}</h3>
       <h3>counter: {counter}</h3>
    </div>
  )
} 

export default Lifecycle