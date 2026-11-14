import React from "react";
import "./App.css";

function Navbar({ searchTerm, setSearchTerm, logout }) {
  return (
    <nav className="navbar">
      <h1>FlixZone</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={logout} style={logoutStyle}>Log Out</button>
    </nav>
  );
}

const logoutStyle = {
  backgroundColor: "#ff4b5c",
  border: "none",
  color: "#fff",
  padding: "0.5rem 1rem",
  borderRadius: "15px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Navbar;
