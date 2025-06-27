import React, { useState } from "react";

const UpdateObject = () => {
  // making object in state
  // Display object vlues
  // update object key
  // update nested object key

  // const [name, setname] = useState("ajay");

  const [data, setdata] = useState({
    name: "ajay",
    address: {
      city: "Delhi",
      country: "india",
    },
  });
  const handlename = (val) => {
    data.name = val;
    console.log(data);
    setdata({ ...data }); // new object created

    // setname("aman");
  };
  const handleCity = (citY) => {
    data.address.city = citY;
    setdata({ ...data });
  };
  const handleCountry = (country) => {
    data.address.country = country;
    setdata({ ...data });
  };

  return (
    <div>
      {/* <h1>Name: {name}</h1> */}
      {/* <button onClick={handlename()}>Updat Name</button> */}
      <input
        type="text"
        onChange={(e) => {
          handlename(e.target.value);
        }}
        name=""
        id=""
      />
      <input
        type="text"
        onChange={(e) => {
          handleCity(e.target.value);
        }}
        placeholder="city"
        name=""
        id=""
      />
      <input
        type="text"
        onChange={(e) => {
          handleCountry(e.target.value);
        }}
        placeholder="city"
        name=""
        id=""
      />

      <h2>Name:{data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </div>
  );
};

export default UpdateObject;
