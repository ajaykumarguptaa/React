import React from 'react'

const FirstComp = ({user}) => {


  return (
    <>  
    <div>FirstComp</div>
    <button onClick={()=>{alert(sum())}}>hello</button>
    <Fruit/> 
    {sum()}
    <h1> name:{user.name}</h1>
    <h2>ahe:{user.age}</h2>
     </>
  )
}


function Fruit(){
  return(
    <h1>hello how are You?</h1>
  )
}

function sum(){
  return( 3+4)
}

export default FirstComp