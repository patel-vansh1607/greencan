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
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h2>Enter PIN to Access</h2>
      <input
        type="password"
        value={pin}
        onChange={handleChange}
        maxLength="4"
        style={{ fontSize: "20px", textAlign: "center", width: "80px" }}
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
        Unlock
      </button>
    </div>
  );
};

export default PinLock;
