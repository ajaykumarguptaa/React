import React, { useState } from "react";
import { useRef } from "react";
const Useref = () => {
  const inputref = useRef(null);

  const inputHandler = () => {
    console.log(inputref);
    inputref.current.focus();
    inputref.current.style.color = "red";
    inputref.current.placeholder = "enter password";
  };
  const handledisplay = () => {
    if (inputref.current.style.display != "none") {
      inputref.current.style.display = "none";
    } else {
      inputref.current.style.display = "inline";
    }
  };

  const [dispalys, stDisplay] = useState(true);
  const[input,setinput]=useState("");
  const [skill,setSkill]=useState(" ");

  const handleSkill=(e)=>{
    if(e.target.checked){
   setSkill([...skill,e.target.value])
    }else{
      setSkill([...skill.filter((item)=>item!=e.target.value)])
    }

  }
  return (
    <div>
      <input
        ref={inputref}
        type="text"
        name=""
        id=""
        onChange={(e)=>{setinput(e.target.value)}}
        placeholder="enter your name"
      />
      <h4>{input}</h4>
      <button
        onClick={() => {
          inputHandler();
        }}
      >
        focus on input field
      </button>
      <button onClick={handledisplay}>toggle</button>

      <div>{dispalys ? <h1>hello useState</h1> : null}</div>
      <button
        onClick={() => {
          stDisplay(!dispalys)
        }}
      >
        {" "}
        hide
      </button>
   <div>
    <h6>CheckRedio</h6>
    <input type="checkbox" onChange={handleSkill} value={"game1"} name=""  id="BGMI" />
    <label htmlFor="BGMI">PUBG1</label>
<br />
    <input type="checkbox" onChange={handleSkill} value={"game5"} name=""  id="BGMI1" />
    <label htmlFor="BGMI1">PUBG2</label>
<br />
    <input type="checkbox" onChange={handleSkill} value={"game2"} name=""  id="BGMI2" />
    <label htmlFor="BGMI2">PUBG3</label>
<br />
    <input type="checkbox" onChange={handleSkill} value={"game3"} name=""  id="BGMI3" />
    <label htmlFor="BGMI3">PUBG4</label>
<br />
    <input type="checkbox" onChange={handleSkill} value={"game4"} name=""  id="BGMI4" />
    <label htmlFor="BGMI4">PUBG5</label>
   </div>
     
     <div>
      <h2>{skill}</h2>
     </div>
    </div>
  );
};

export default Useref;
