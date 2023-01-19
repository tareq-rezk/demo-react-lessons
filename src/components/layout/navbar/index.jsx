import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav id="main-nav">
      <h1>demoStore</h1>
      <div className="home">
        <p>Home</p>
        <button>login</button>
      </div>
    </nav>
  );
};

export default Navbar;
