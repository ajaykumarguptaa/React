import React, { useActionState } from "react";

const ActionState = () => {
  const handleSubmit = async (previosData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));
    // console.log("handleSubmit is called",name,password);
    if (name && password) {
      return { message: "submit success full",name,password };
    } else {
      return { error: "some error occur data not submited",name,password };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);

  return (
    <div>
      <h1>UseActionState </h1>
      <form action={action}>
        <input type="text" placeholder="Enter Name" name="name" />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          id=""
        />
        <br />
        {data?.message && <span style={{color:"green"}}>{data?.message}</span>}
        {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
        <br />
        <button disabled={pending}>Submit Data</button>

        <h3>show for data</h3>
        <h2>Name: {data?.name}</h2>
        <h2>PassWord: {data?.password}</h2>
      </form>
    </div>
  );
};

export default ActionState;
