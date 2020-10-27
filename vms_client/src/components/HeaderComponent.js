import React, { Component } from "react";
import { Link } from "react-router-dom";

import SideNavv from "./SidebarComponent";

function Header(props) {
  return (
    <div className="header">
      <SideNavv />
    </div>
  );
}
export default Header;
