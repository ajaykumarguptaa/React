import React, { useState } from 'react'

const LiftingUpE = ({setuser}) => {
 

  return (
    <div>
      <h1>Add users: </h1>
      <input type="text" onChange={(e)=>{setuser(e.target.value)}} placeholder='Enter User' />
    </div>
  )
}

export default LiftingUpE