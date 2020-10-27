import React, { useState } from "react";
import { Nav, NavItem, Navbar, NavbarToggler, Collapse } from "reactstrap";
import {
  SideNav,
  SideNavBody,
  MenuIcon,
  MenuHeading,
} from "react-simple-sidenav";
import { NavLink } from "react-router-dom";

function SideNavv(props) {
  const [showNav, setShowNav] = useState(false);

  const navitems = [
    <NavLink className="nav-link" to="/register">
      <span className="fa fa-list fa-lg "></span> RECORDS
    </NavLink>,
    <NavLink className="nav-link" to="#">
      <span className="fa fa-bar-chart fa-lg "></span> STATS
    </NavLink>,
    <NavLink className="nav-link" to="/user">
      <span className="fa fa-user fa-lg "></span> USER
    </NavLink>,
  ];
  const navTitle = <h3></h3>;

  return (
    <div style={{ width: "20%" }}>
      <div>
        <MenuIcon onClick={() => setShowNav(!showNav)} class="ml-5" />
      </div>
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title={navTitle}
        titleStyle={{ background: "#3e3c3f" }}
        items={navitems}
      />
    </div>
  );
}
export default SideNavv;
/*
export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav vertical>
                <NavItem>
                  <NavLink className="nav-link" to="/register">
                    <span className="fa fa-list fa-lg"></span> RECORDS
                  </NavLink>
                </NavItem>
                <hr />
                <NavItem>
                  <NavLink className="nav-link" to="#">
                    <span className="fa fa-bar-chart fa-lg"></span> STATS
                  </NavLink>
                </NavItem>
                <hr />
                <NavItem>
                  <NavLink className="nav-link" to="/user">
                    <span className="fa fa-user fa-lg"></span> USER
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
          <hr />
        </Navbar>
      </React.Fragment>
    );
  }
}*/
