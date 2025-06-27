import React, { useState } from "react";

const Inline = () => {
  const color = "rgb(19 31 38)";
  const link =
    "https://cdn.pixabay.com/photo/2023/09/16/04/19/flowers-8255934_1280.png";
  const [texts,settext]=useState("vector")
  const [change, setchange] = useState({
    height: "350px",
    width: "250px",
    // backgroundColor: color,
    boxShadow: "1px 1px 3px 1px white",
  });
  const handleTheme=(bg,text)=>{
    setchange({...change,backgroundColor:bg,color:text});
    settext("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde veritatis dicta tenetur. Eaque perspiciatis asperiores sequi sed voluptatum natus maiores ratione animi id beatae nihil, temporibus quod ipsum eveniet aut!")
  }
  return (
    <div>
      <div style={change}>
        <img src={link} width="240px" style={{ paddingTop: "6px" }} alt="" />
        <div>
          <h4>Image</h4>
          <h4>{texts}</h4>
        </div>
      </div>
<br />
      <button onClick={() => {handleTheme("#726359","yellow")}}> change UI </button>
      <button onClick={() => {handleTheme("","yellow"),settext("vectoer Image")}}>Reset change UI </button>
      
    </div>
  );
};

export default Inline;
