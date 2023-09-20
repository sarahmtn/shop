import React from "react";
import "./Navbar.css";
import NavItems from "../NavItems/NavItems";

const Navbar = (props) => {
  return (
    <header className="navbar">
      <nav className="nav-items">
        <NavItems />
      </nav>
    </header>
  );
};
export default Navbar;
