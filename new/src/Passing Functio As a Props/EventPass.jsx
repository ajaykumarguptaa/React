import React from "react";
import { UserLet } from "./UserLet";

const EventPass = () => {
  
  const getname=(name)=>{
     alert(name)
  }

  const calls = () => {
    alert("Hi,i aom ajay!");
  };

  return (
    <div>
      <h3> Passing funnction as a pprops</h3>
      <UserLet EventPass={calls} name={"ajay1"}  getname={getname}/>
      <UserLet EventPass={calls} name={"ajay2"}  getname={getname} />
      <UserLet EventPass={calls} name={"ajay3"}  getname={getname} />
      <UserLet EventPass={calls} name={"ajay4"}  getname={getname} />
      <UserLet EventPass={calls} name={"ajay5"}  getname={getname} />
      <UserLet EventPass={calls} name={"ajay6"}  getname={getname} />

    </div>
  );
};

export default EventPass;
