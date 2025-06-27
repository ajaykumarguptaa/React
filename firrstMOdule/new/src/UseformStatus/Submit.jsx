import React from "react";
import { useFormStatus } from "react-dom";

const Submit = () => {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 5000));
    console.log("submit");
  };

  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <input type="text" placeholder="Enter Name" />
        <br />
        <input type="password" name="" placeholder="password" id="" />
        <br />
        <br />
        <button disabled={pending}>{pending?"Submitting.....":"Submit"}</button>
      </div>                          
    );
  }

  return (
    <div>
      <h1>useformStatus hook</h1>
      <form action={handleSubmit}>
        <CustomerForm />
        
      </form>
    </div>
  );
};

export default Submit;
