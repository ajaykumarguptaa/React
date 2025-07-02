import React from 'react'
import { createElement } from 'react'
function JS(){
  return (createElement("h1",{id:"h1"},"Ajay Kumar Gupta"))
}




export const New =()=>{
 var name="Ajay"
let x=10;
let  y=13;
function fruit(){
  return("Mango")
}
function sums(a,b,op){
  if(op=="+"){
    return(a+b)
  }else if(op=="-"){
    return(a-b)
  }else if(op=="*"){
    return (a*b)
  }
}

const obj={
  name:"ajay",
  age:"23",
  branch:"BCA"
}
const UserArray=["sam","petter","Ambros"]



  return(
    <>
    <h1>Turnary operator: {name?name:"user not found"}</h1>
   <h1>Fruit: {fruit()}</h1>
   <h2>sum is: {sums(2,4,"*")}</h2>
   <h2>Name: {obj.name}</h2>
   <h2>Age: {obj.age}</h2>
   <h2>Branch: {obj.branch}</h2>
   <h1>{UserArray[2]}</h1>
   <input type="text" value={name?name:"placeholder"} placeholder='hello' id={name}/>
    </>
   )

 } 

export default JS