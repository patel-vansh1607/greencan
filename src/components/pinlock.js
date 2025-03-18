import { useState } from "react";

const PinLock = ({ children }) => {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPin = process.env.REACT_APP_SECRET_PIN;

  const handleChange = (e) => {
    if (/^\d{0,4}$/.test(e.target.value)) setPin(e.target.value);
  };

  const handleSubmit = () => {
    if (pin === correctPin) {
      setIsAuthenticated(true);
    } else {
      alert("❌ Incorrect PIN");
      setPin("");
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔐 Secure Access</h2>
        <p style={styles.subtitle}>Enter your 4-digit PIN to continue</p>
        <input
          type="password"
          value={pin}
          onChange={handleChange}
          maxLength="4"
          style={styles.input}
        />
        <button
          onClick={handleSubmit}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.background = "#1B5E20")}
          onMouseLeave={(e) => (e.target.style.background = "#388E3C")}
        >
          Unlock 🚀
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #E8F5E9, #A5D6A7)", // Soft green gradient
  },
  card: {
    background: "rgba(255, 255, 255, 0.2)", // Glassmorphism effect
    backdropFilter: "blur(10px)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 10px 30px rgba(0, 128, 0, 0.2)", // Soft shadow
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  title: {
    color: "#2E7D32", // Dark green
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#4CAF50", // Lighter green
    fontSize: "16px",
    marginBottom: "15px",
  },
  input: {
    fontSize: "20px",
    textAlign: "center",
    width: "100px",
    padding: "10px",
    border: "2px solid rgba(46, 125, 50, 0.8)", // Semi-transparent green border
    borderRadius: "10px",
    outline: "none",
    background: "rgba(255, 255, 255, 0.5)",
    boxShadow: "0px 5px 10px rgba(46, 125, 50, 0.2)", // Soft shadow
    transition: "0.3s",
  },
  button: {
    marginTop: "15px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#388E3C",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
};

export default PinLock;
