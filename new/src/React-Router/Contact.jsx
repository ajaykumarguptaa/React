import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.text}>
        We'd love to hear from you! Feel free to reach out with questions, feedback, or collaboration opportunities.
      </p>

      <form style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          style={styles.input}
          required
        />
        <textarea
          placeholder="Your Message"
          style={styles.textarea}
          required
        ></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#0f172a",
  },
  text: {
    fontSize: "1.1rem",
    margin: "1rem 0",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1.5rem",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "0.75rem",
    fontSize: "1rem",
    height: "120px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#1d4ed8",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Contact;
