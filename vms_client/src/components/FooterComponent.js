import React, { Component } from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3 offset-1 col-sm-3">
            <Link to="/user">
              <i className="fa fa-home fa-lg" />
            </Link>
          </div>
          <div className="col-3 offset-1  col-sm-3">
            <Link to="/register">
              <i className="fa fa-search fa-lg" />
            </Link>
          </div>
          <div className="col-3 offset-1 col-sm-3">
            <Link to="/register">
              <i className="fa fa-address-book fa-lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
