import React from "react";
import "./NavItems.css";
import NavItem from "../NavItem/NavItem";

const NavItems = () => {
  return (
    <ul className="nav-items">
      <NavItem link="/">
        حساب من
        <img
          className="profileicon"
          width="16"
          height="16"
          src="https://img.icons8.com/tiny-glyph/16/FFFFFF/user.png"
          alt="user"
        />
      </NavItem>
    </ul>
  );
};

export default NavItems;
