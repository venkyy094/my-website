// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#8d6e63",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
        Venkateshwar Rao
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "#8e8eff", textDecoration: "none" }}>
          About
        </Link>
        <Link
          to="/projects"
          style={{ color: "#8e8eff", textDecoration: "none" }}
        >
          Projects
        </Link>
        <Link to="/resume">Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
