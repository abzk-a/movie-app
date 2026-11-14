import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { motion } from "framer-motion";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords must match!");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");
      login(data.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={formStyle}
    >
      <h2>Sign Up</h2>
      {error && <p style={errorStyle}>{error}</p>}
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        required 
        style={inputStyle} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        required 
        style={inputStyle} 
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={confirm} 
        onChange={e => setConfirm(e.target.value)} 
        required 
        style={inputStyle} 
      />
      <button type="submit" style={buttonStyle}>Sign Up</button>
    </motion.form>
  );
}

const formStyle = {
  maxWidth: 360,
  margin: "auto",
  padding: 24,
  backgroundColor: "#222240",
  borderRadius: 16,
  color: "#ffc400",
  boxShadow: "0 6px 24px #4a3ff7a0"
};
const errorStyle = { color: "#ee6565", marginBottom: 16 };
const inputStyle = {
  width: "100%",
  padding: 12,
  marginBottom: 16,
  borderRadius: 10,
  border: "none",
  backgroundColor: "#393865",
  color: "#fff",
  fontSize: 16,
};
const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#6f3ff5",
  border: "none",
  borderRadius: 24,
  fontWeight: "bold",
  cursor: "pointer",
  color: "#ffc400",
  fontSize: 18,
};

export default SignupForm;
