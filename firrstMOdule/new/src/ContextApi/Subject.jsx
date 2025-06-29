import React, { useContext } from 'react'
import { SubjectContext } from './ContextData'

const Subject = () => {
  const subject=useContext(SubjectContext)
  return (
    <div style={{backgroundColor:"pink",color:"black", padding:10, width:"full"}}>
      <h1>Subject is : {subject}</h1>
    </div>
  )
}

export default Subject