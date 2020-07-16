import React, { Component } from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3 offset-1 col-sm-3">
            <i className="fa fa-home fa-lg"></i>
          </div>
          <div className="col-3 offset-1  col-sm-3">
            <i className="fa fa-search fa-lg"></i>
          </div>
          <div className="col-3 offset-1 col-sm-3">
            <i className=" fa fa-address-book fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
