import React, { useState } from "react";

export const HandleCheck = () => {
  const [skill,setskill]=useState(["java","php"])
  const handleSkills=(e)=>{
    console.log(e.target.value,e.target.checked)
    if(e.target.checked){
      setskill([...skill,e.target.value])
    }else{
      setskill([...skill.filter((item)=>item!=e.target.value)])
    }
  }
  
  return (
    <div >
      <h3>HandleCheck</h3>
      <input  onChange={handleSkills} type="checkbox" name="" id="php" value="php" />
      <label htmlFor="php">PHP</label>
<br />
      <input onChange={handleSkills}  type="checkbox" name="" id="Python" value="python" />
      <label htmlFor="Python">Python</label>
<br />
      <input onChange={handleSkills}  type="checkbox" name="" id="C++" value="c++" />
      <label htmlFor="C++">C++</label>
<br />
      <input  onChange={handleSkills} type="checkbox" name="" id="JavaScript" value="javascript" />
      <label htmlFor="JavaScript">JavaScript</label>
      
      <h5>{skill.toString()}</h5>

      <button onClick={()=>setskill('')} >Clear</button>

    </div>
  );
};
