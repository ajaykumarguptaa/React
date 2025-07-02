import React from 'react'
import styled from "styled-components"

const StyleComponent = () => {
  // 1st method
  // const Heading=styled.h1`
  // color:red;

  // `

  // 2nd method object like mothod
  const Heading=styled.h1({
    color:"red",
    backgroundColor:"#726359"
  })
  const btn=styled.button`
  color:red;
  `
  return (
    <div>
      <Heading> hello how are you</Heading>
      <Heading>hello how are you</Heading>
      <Heading>hello</Heading>
       <btn></btn>

    </div>
  )
}

export default StyleComponent