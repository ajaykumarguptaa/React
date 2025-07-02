import React, { useState } from "react";

export const ControllComp = () => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Cintrolled Component</h1>
      <form action="" method="get">
        <input type="text" name="" value={name} id="108a" placeholder="Enter name"  onChange={(e)=>setname(e.target.value)} />
        <br />
        <br />
        <input type="password" name="" value={password} id="108b" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  />
        <br />
        <br />
        <input type="email" name=""  value={email} id="108c" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <br />
        <input type="submit" value="Submit"  />
        <br />
        <br />
        <button  onClick={()=>{setEmail(""),setname(""),setPassword("")}}>Clear </button> 

        <br />
        <br />
        <h4>{name}</h4>
        <h4>{password}</h4>
        <h4>{email}</h4>
      </form>
    </div>
  );
};
