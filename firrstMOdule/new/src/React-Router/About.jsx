import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        Welcome to our React application! This project is designed to help you understand how routing works using React Router. 
        We're committed to learning and building great user experiences using modern web technologies.
      </p>
    </div>
  );
};

// Inline styles (you can replace this with Tailwind, CSS Modules, etc.)
const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#1e3a8a",
  },
  text: {
    fontSize: "1.2rem",
    color: "#444",
    marginTop: "1rem",
  },
};

export default About;
