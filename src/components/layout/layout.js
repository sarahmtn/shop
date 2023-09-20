import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "../layout/layout.css";
import Navbar from "../Navigation/Navbar/Navbar";

const Layout = (props) => {
  return (
    <Wrapper>
      <Navbar />
      <main className="content">{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
