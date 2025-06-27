import React from "react";
import Collage from "./Collage";

const NestedLoop = () => {
  const collageData = [
    {
      name: "iet",
      city: "chhatarpur",
      website: "www.iet.com",
      student: [
        {
          name: "anil",
          age: "21",
          email: "anil@let.com",
        },
        {
          name: "anil2",
          age: "21",
          email: "anil2@let.com",
        },
        {
          name: "anil3",
          age: "21",
          email: "anil3@let.com",
        },
      ],
    },
    {
      name: "iit Delhi",
      city: "Delhi",
      website: "www.iit.com",
      student: [
        {
          name: "anil",
          age: "21",
          email: "anil@let.com",
        },
        {
          name: "anil2",
          age: "21",
          email: "anil2@let.com",
        },
        {
          name: "anil3",
          age: "21",
          email: "anil3@let.com",
        },
      ],
    },
    {
      name: "KCIET ",
      city: "hISAR",
      website: "www.KCIET.com",
      student: [
        {
          name: "anil",
          age: "21",
          email: "anil@let.com",
        },
        {
          name: "anil2",
          age: "21",
          email: "anil2@let.com",
        },
        {
          name: "anil3",
          age: "21",
          email: "anil3@let.com",
        },
      ],
    },
  ];
  return (
    <>
      <div>NestedLoop in components</div>
      {collageData.map((collage, index) => (
        <div key={index}>
         <Collage collage={collage}/>
        </div>
      ))}
    </>
  );
};

export default NestedLoop;
