import React from "react";

const Collage = ({ collage }) => {
  return (
    <div
      style={{
        border: "2px solid green",
        margin: "6px",
        borderRadius: "40px",
        width: "300px",
        padding: "0",
        backgroundColor: "grey",
      }}
    >
      <h3>Name: {collage.name}</h3>
      <ul>
        <li>
          <h5>city: {collage.city}</h5>
        </li>
        <li>
          <h5>Website: {collage.website}</h5>
        </li>
        <li>
          {
           collage && collage.student.map((student)=>(
              <div>
                <h4>Student Name: {student.name}</h4>
                <h5>Age: {student.aage}</h5>
                <h5>Email: {student.email}</h5>
              </div>
            ))
          }
        </li>
      </ul>
    </div>
  );
};

export default Collage;
