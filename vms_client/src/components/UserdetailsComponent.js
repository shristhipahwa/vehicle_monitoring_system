import React, { Component } from "react";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
  Col,
  Button,
} from "reactstrap";
class UserDetails extends Component {
  renderUser(user) {
    if (!user) {
      return (
        <Card>
          <CardBody>
            <CardText>Not a Registered Member</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <Card>
          <CardBody>
            <CardText>
              <img src={user.photo[0]} alt={user.fullname}></img>
            </CardText>
            <CardText>Name - {user.fullname}</CardText>
            <CardText>Phone number -{user.phonenum}</CardText>
            <CardText>Registered number - {user.Registerednum}</CardText>
            <CardText>Department - {user.department}</CardText>
            <CardText>Designation - {user.designation}</CardText>
          </CardBody>
          <div className="row card-button">
            <Col md={{ size: 2, offset: 3 }}>
              <Button type="cancel" color="danger">
                Deny
              </Button>
            </Col>
            <Col md={{ size: 2 }}>
              <Button type="submit" color="success">
                Allow
              </Button>
            </Col>
          </div>
        </Card>
      );
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-6">
            <h3>User Information</h3>
            {this.renderUser(this.props.user)}
          </div>
        </div>
      </div>
    );
  }
}
export default UserDetails;
