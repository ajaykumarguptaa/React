import React, { useEffect, useState } from "react";
import Lifecycle from "./Lifecycle";
import { False } from "../Toggle_Hide_And_Show/Uses";

const USeeffect = () => {
  const [counter, setconter] = useState(0);
  const [Data, setData] = useState(0);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    // callones();
    counterFunction();
  }, []);

  function counterFunction() {
    console.log("CallOnece function called!", counter);
  }

  function callones() {
    console.log("Call with function!");
  }

  return (
    <div>
     {
      display?<Lifecycle Data={Data} counter={counter} display={display} ></Lifecycle>:null
     }
      <h1>UseEeffect hook</h1>
      <button onClick={() => setconter(counter + 1)}>Counter:</button>
      <button onClick={() => setData(Data + 1)}>Data:</button>
      
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </div>
  );
};

export default USeeffect;
