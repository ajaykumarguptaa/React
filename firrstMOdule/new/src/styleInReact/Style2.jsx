import React, { useState } from "react";

const Style2 = () => {
  const [theme, setTheme] = useState({
    height: "350px",
    width: "250px",
    backgroundColor: "skyblue",
    // color:"blue"
  });
  const [text, settext] = useState("image");
  const [grid, setgrid] = useState(true);

  const handleTheme = (bgcolor, colorText) => {
    setTheme({ ...theme, backgroundColor: bgcolor, color: colorText });
    settext("why  why why ");
  };
  return (
    <>
      <div>
        <button onClick={() => handleTheme("#726359", "black")}> Theme</button>
        <button
          onClick={() => {
            handleTheme("rgb(19 31 38)", ""), settext("Image");
          }}
        >
          {" "}
          ResetTheme
        </button>
        <button onClick={() =>setgrid(!grid)}>Togglgrid</button>
      </div>
      <div
        style={{
          display: grid ? "flex" : "block",
          gap: "1rem",
          flexWrap: "wrap",
          width: "full",
          margin:grid?"0":"1rem"
        }}
      >
        <div
          // style={{ height: "350px", width: "250px", backgroundColor: "skyblue" }}
          style={theme}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/12/27/19/25/flower-9294773_1280.png"
            alt=""
            width={"240px"}
          />
          <h6> {text}</h6>
          <h6>Vector</h6>
        </div>
        <div
          // style={{ height: "350px", width: "250px", backgroundColor: "skyblue" }}
          style={theme}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/12/27/19/25/flower-9294773_1280.png"
            alt=""
            width={"240px"}
          />
          <h6> {text}</h6>
          <h6>Vector</h6>
        </div>
        <div
          // style={{ height: "350px", width: "250px", backgroundColor: "skyblue" }}
          style={theme}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/12/27/19/25/flower-9294773_1280.png"
            alt=""
            width={"240px"}
          />
          <h6> {text}</h6>
          <h6>Vector</h6>
        </div>
        <div
          // style={{ height: "350px", width: "250px", backgroundColor: "skyblue" }}
          style={theme}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/12/27/19/25/flower-9294773_1280.png"
            alt=""
            width={"240px"}
          />
          <h6> {text}</h6>
          <h6>Vector</h6>
        </div>
        <div
          // style={{ height: "350px", width: "250px", backgroundColor: "skyblue" }}
          style={theme}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/12/27/19/25/flower-9294773_1280.png"
            alt=""
            width={"240px"}
          />
          <h6> {text}</h6>
          <h6>Vector</h6>
        </div>
        <div
          // style={{ height: "350px", width: "250px", backgroundColor: "skyblue" }}
          style={theme}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/12/27/19/25/flower-9294773_1280.png"
            alt=""
            width={"240px"}
          />
          <h6> {text}</h6>
          <h6>Vector</h6>
        </div>
        <div
          // style={{ height: "350px", width: "250px", backgroundColor: "skyblue" }}
          style={theme}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/12/27/19/25/flower-9294773_1280.png"
            alt=""
            width={"240px"}
          />
          <h6> {text}</h6>
          <h6>Vector</h6>
        </div>
        <div
          // style={{ height: "350px", width: "250px", backgroundColor: "skyblue" }}
          style={theme}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/12/27/19/25/flower-9294773_1280.png"
            alt=""
            width={"240px"}
          />
          <h6> {text}</h6>
          <h6>Vector</h6>
        </div>
        <div
          // style={{ height: "350px", width: "250px", backgroundColor: "skyblue" }}
          style={theme}
        >
          <img
            src="https://cdn.pixabay.com/photo/2024/12/27/19/25/flower-9294773_1280.png"
            alt=""
            width={"240px"}
          />
          <h6> {text}</h6>
          <h6>Vector</h6>
        </div>
      </div>
    </>
  );
};

export default Style2;
