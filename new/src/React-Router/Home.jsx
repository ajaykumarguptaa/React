import React from 'react'

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Website</h1>
      <p style={styles.text}>
        This is the Home page of your React application. Explore our features, learn more about us, and enjoy your stay!
      </p>
    </div>
  );
};

// Inline styling (you can use Tailwind, CSS, or styled-components instead)
const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2c3e50",
  },
  text: {
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "1rem",
  },
};

export default Home