import React, { useState } from 'react'

export const Input = () => {
  const[valu,setvalu]=useState("")

  const[newValue,setnewvalue]=useState("")
  return (
    <div>
      <h1>Input Value</h1>
      {/* <input type="text" onChange={(e)=>console.log(e.target.value)} placeholder='Enter your Name' /> */}
      <input type="text" value={valu} onChange={(e)=>setvalu(e.target.value)} placeholder='Enter your Name' />
      <h1>{valu}</h1>
      <button onClick={()=>setvalu("")}>Submit</button>
       <br />
       <br />
       <hr />
       <br />
      {/* new input value */}
      Name:
      <input type="text" placeholder='Enter Name' value={newValue} onChange={(event)=>setnewvalue(event.target.value)} />
       <input type="submit" value="Submit" onClick={()=>setnewvalue("")} /> 
  <br />
  <br />
  <br />
      <div style={{border:"2px solid green",height:"200px"}}>
        <h4>{newValue}</h4>
      </div>
    </div>
  )
}
