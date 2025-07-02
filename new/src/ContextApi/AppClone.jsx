import React, { useState } from "react";
import Collage from "./Collage";
import Class from "./Class";
import { SubjectContext } from "./ContextData";

const AppClone = () => {
  const [selectSubject, setSubject] = useState("english");
  const [finalSubject, setfinalSubject] = useState("english");
  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSubmit = () => {
    setfinalSubject(selectSubject);
  };

  return (
    <div
      style={{
        backgroundColor: "yellow",
        color: "black",
        padding: 10,
        width: "full",
      }}
    >
      {/* wraper class */}
      <SubjectContext.Provider value={finalSubject}>
        <select value={setfinalSubject} onChange={handleChange}>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Physics">Physics</option>
          <option value="Math">Math</option>
        </select>

        <button onClick={handleSubmit}>change Subject</button>
        <h1>Context Api: {finalSubject}</h1>
        <Collage />
      </SubjectContext.Provider>
    </div>
  );
};

export default AppClone;
