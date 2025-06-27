import React, { useState } from "react";

export const HandleRadio = () => {
  const [gender, setgender] = useState("Female");
  const [city, setCity] = useState("Delhi");

  return (
    <div>
      <h1>Handle Radio and DripDown</h1>
      <input
        type="radio"
        onChange={(e) => setgender(e.target.value)}
        value="Male"
        checked={gender == "Male"}
        name="gender"
        id="Male"
      />
      <label htmlFor="Male">Male</label>

      <input
        type="radio"
        onChange={(e) => setgender(e.target.value)}
        name="gender"
        checked={gender == "Female"}
        id="Female"
        value="Female"
      />
      <label htmlFor="Female">Female</label>
      <br />
      <br />
      <h3>selected Gender: {gender}</h3>
      <br />
      <br />
      <br />
      <br />
      <h4>Select city</h4>
      <select
        name=""
        id=""
        defaultValue={"Delhi"}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="chhatarpur">chhatarpur</option>
        <option value="Noida">Noida</option>
        <option value="Delhi">Delhi</option>
        <option value="Gurgaon">Gurgaon</option>
      </select>
      <h4>Selected city is: {city}</h4>
    </div>
  );
};
