import React, { useState } from 'react'

const DriveState = () => {
   const [Users,setUsers]=useState([]);
   const [user,setuser]=useState('')

  const handdleUsers=()=>{

    setUsers([...Users,user])
  }
const total=Users.length
const last=Users[Users.length-1];
const unique=[...new Set(Users)].length

  return (
    <div>
   <h1>Total User: {total}</h1>
   <h1>Last User:{last}</h1>
   <h1>Unique Total User:{unique}</h1>
    <input onChange={(e)=>{setuser(e.target.value)}} placeholder='add new users'  type="text" />
    <button onClick={handdleUsers} >Add User</button>
 {
  Users.map((item,index)=>(
    <h4 key={index}>{item}</h4>
  ))
 }

    </div>
  )
}

export default DriveState