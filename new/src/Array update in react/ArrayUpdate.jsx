import React, { useState } from "react";

const ArrayUpdate = () => {
  const [data, setData] = useState(["aman", "amit", "sumit", "ajay"]);
  const handleClick = () => {
    setData("Ajay kumarr gupta");
  };
  const HandleChage = (val) => {
    data[data.length - 1] = val;
    console.log(data);
    setData([...data]);
  };
  const [dataDetail, setDataDetail] = useState([
    { name: "anil", age: "19" },
    { name: "mohan", age: "29" },
    { name: "amit", age: "24" },
    { name: "aman", age: "14" },
  ]);
  const HandleAge = (age) => {
    dataDetail[dataDetail.length-1].age=age;
    setDataDetail([...dataDetail])
  };
  // const

  return (
    <div>
      <h1>Name:{data}</h1>
      <input
        type="text"
        onChange={(e) => {
          HandleChage(e.target.value);
        }}
        placeholder="Enter Name"
      />
      <button
        onClick={() => {
          setData("amit kuamr gupta");
        }}
      >
        Add User
      </button>
      {data.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <h2>--- Enter last user name ---</h2>
      <input type="text" onChange={(e)=>{HandleAge(e.target.value)}} />
      {dataDetail.map((items, index) => (
        <h4 key={index}>
          Name: {items.name} and,Age is: {items.age}
        </h4>
      ))}
    </div>
  );
};

export default ArrayUpdate;
