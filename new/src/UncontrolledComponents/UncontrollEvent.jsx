import React, { useRef } from "react";

const UncontrollEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = document.querySelector("#UserName").value;
    //  const username1=document.querySelector("#UserName").style.color="red";
    const userpassword = document.querySelector("#UserPassword").value;
    console.log(userpassword, username);
  };

  const HF = useRef(null);
  const HF2 = useRef(null);
  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log("sjfdgjkhj");
    const data = HF.current.value;
    const data2 = HF2.current.value;
    console.log(data, data2);
  };

  return (
    <div>
      <h1>by using querry selector</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" id="UserName" />
        <br />
        <input
          type="password"
          name=""
          id="UserPassword"
          placeholder="Password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h1>by using use ref</h1>
      <form action="" method="post" onSubmit={handleSubmit2}>
        <input ref={HF} type="text" placeholder="Enter Name" />
        <br />
        <input ref={HF2} type="password" name="" placeholder="Password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrollEvent;
