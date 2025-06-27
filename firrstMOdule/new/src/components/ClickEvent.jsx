import React from 'react'

 const ClickEvent = () => {
  let path ="https://cdn.pixabay.com/photo/2025/05/30/17/15/mountain-9631829_1280.jpg"
  function alerts(){
      alert("hello")
    }
    function alerts2(name){
      alert(name)
    }
    const Object={
      name:'Ajay',
      age:20,
   
    }
  return (
    
    <div>
      <img src={path} alt="" width="400px" />
      <h1>On click Eveent </h1>
      <button onClick={ function alerts(){
      alert("hello2")
    }}>click</button>
    <button onClick={alerts}>click</button>
    {/* //not pass parameter */}

      <button onClick={()=>alerts2("Apple")}>click</button>
    </div>
  )
}
export default ClickEvent;