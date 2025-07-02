import React from 'react'
import Subject from './Subject'

const Student = () => {
  return (
    <div style={{backgroundColor:"grey",color:"black", padding:10, width:"full"}}>
      <h1>Student component</h1>
      <Subject/>
    </div>
  )
}

export default Student