import React from "react";
import { User } from "./User";

export const Loop_map = () => {
  const nameArr = ["ajay", "amit", "aman", "pop"];
  const userArray = [
    {
      id: "1",
      name: "ajay",
      age: "24",
      email: "ajay@gmail.com",
    },
    {
      id: "2",
      name: "ajay",
      age: "24",
      email: "ajay@gmail.com",
    },
    {
      id: "3",
      name: "ajay",
      age: "24",
      email: "ajay@gmail.com",
    },
    {
      id: "4",
      name: "ajay",
      age: "24",
      email: "ajay@gmail.com",
    },
    {
      id: "5",
      name: "ajay",
      age: "24",
      email: "ajay@gmail.com",
    },
  ];
  return (
    <>
      <h3>Dynamic fatch Data</h3>
      <table border="1">
        <thead>
          <tr>
            <td>name</td>
          </tr>
        </thead>
        <tbody>
          {nameArr.map((user) => (
            <tr key={user}>
              <td>{user}</td>
              {/* <User name={user}/> */}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h3>reuse components</h3>
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        {userArray.map((item) => (
          <tr key={item.id}>
            {/* <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td> */}
            <User pass={item}/>
          </tr>
        ))}
        
      </tbody>
    </>
  );
};
