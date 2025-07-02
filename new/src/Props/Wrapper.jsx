import React from 'react'
// passing jsx {children} props used to get value
export const Wrapper = ({children,color="skyblue"}) => {
  return (
    <div style={{color:color, border:"4px solid red", borderRadius:"5px", margin:"10px"}}>
      {children}
    </div>
  )
}
