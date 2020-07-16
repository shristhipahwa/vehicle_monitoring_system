import React from "react";
import { Nav, NavItem, Navbar, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Mycomponent extends React.Component {
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
                    <span className="fa fa-list fa-lg"></span> Records
                  </NavLink>
                </NavItem>
                <hr />
                <NavItem>
                  <NavLink className="nav-link" to="#">
                    <span className="fa fa-list fa-lg"></span> Stats
                  </NavLink>
                </NavItem>
                <hr />
                <NavItem>
                  <NavLink className="nav-link" to="/user">
                    <span className="fa fa-list fa-lg"></span> User
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
}
