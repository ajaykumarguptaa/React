import React from "react";
import { Link } from "react-router";

const Student = () => {
  return (
    <div>
      Student
      <Link to="/collage">Collage Details</Link>
      <h3>Student data</h3>
    </div>
  );
};

export default Student;
