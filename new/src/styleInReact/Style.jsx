import React, { useState } from "react";

const Style = () => {
  const [color, setColor] = useState("green");
  const[ textcolor,setTextColor]=useState("")
  // const style1 = {
  //   height: "350px",
  //   width: "200px",
  //   backgroundColor: "green",
  //   marginTop: "2rem",
  //   border: "10px solid black",
  //   barderRadius: "20px",
  // };
  const path =
    "https://cdn.pixabay.com/photo/2024/08/25/02/16/sunflower-8995443_1280.jpg";
  return (
    <div>
      <div style={{ height: "350px", width: "200px", backgroundColor: "grey", color:textcolor }}>
        <img src={path} alt="" width={"165px"} style={{ paddingTop: "1rem" }} />
        <h3 >Flower</h3>
        <h4>SunFlower</h4>
      </div>
      <div
        style={{
          
          height: "50px",
          width: "200px",
          backgroundColor:color ,
          marginTop: "2rem",
          border: "10px solid black",
          barderRadius: "20px",
        }}
      >
        <button onClick={() =>{ setColor("red"),setTextColor("green")}}>color</button>
        <button onClick={()=>{setColor("green"),setTextColor("")}}>Reset</button>
      </div>
    </div>
  );
};

export default Style;
