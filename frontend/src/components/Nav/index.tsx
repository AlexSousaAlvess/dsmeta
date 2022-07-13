import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/sobre" className="nav-button">Sobre</Link>
    </nav>
  )
}

export default Nav;