import React, { useState } from "react";
import { ArrayProps, ArrayProps2, UserProps } from "./UserProps";
import { PropsUser } from "./UserProps";
import { Student } from "./Student";
import { DefaultProps } from "./DefaultProps";
import { Wrapper } from "./Wrapper";

const Props = () => {
  let age = 23;
  let name = "hari";

  const object = {
    name: "Alex",
    age: 23,
    branch: "B.tech",
  };
  const collageName = ["MIT", "NIT", "IIT", "IIIT"];
  const [student, setsudent] = useState();
  return (
    <div>
      {/* Props is use to passing Data from one component to another component */}

      {/* <UserProps name="Ajay Kumar GUpta" age={21}   /> */}
      {/* <UserProps name={name} age={age}   /> */}
      <PropsUser object={object} />
      <ArrayProps name={collageName} />
      <ArrayProps2 name={collageName[2]} />
      <hr />
      {student && <Student name={student} />}
      <button onClick={() => setsudent("Bhaskar")}>OnCheck</button>
      <hr />
      <DefaultProps />
      <Wrapper>
        <h2> Hello Every One !</h2>
      </Wrapper>
      <Wrapper color="orange">
        <h2> Hello Every One !</h2>
      </Wrapper>
      <Wrapper>
        <h2 style={{color:"red"}}>Ajay kumar gupta </h2>
      </Wrapper>
    </div>
  );
};

export default Props;
