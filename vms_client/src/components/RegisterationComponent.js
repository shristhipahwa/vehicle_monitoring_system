import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
  Row,
  Container,
} from "reactstrap";

class Registeration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      phonenum: "",
      Registerednum: "",
      department: "",
      designation: "",
      photo: [],
      touched: {
        phonenum: false,
        Registerednum: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    console.log("Current State is:" + JSON.stringify(this.state));
    alert("Current State is:" + JSON.stringify(this.state));
    event.preventDefault();
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(phonenum, Registerednum) {
    const errors = {
      phonenum: "",
      Registerednum: "",
    };

    const reg = /^\d+$/;
    if (this.state.touched.phonenum && !reg.test(phonenum))
      errors.phonenum = "phone.Number should contain only numbers";

    const regex = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
    if (this.state.touched.Registerednum && !regex.test(Registerednum))
      errors.Registerednum = "Registered Number should be in proper format";

    return errors;
  }
  render() {
    const errors = this.validate(this.state.phonenum, this.state.Registerednum);
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h3>Register Yourself</h3>
            <hr />
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="fullname" md={3}>
                  Name
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Full Name"
                    value={this.state.fullname}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="phonenum" md={3}>
                  Phone number
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="phonenum"
                    name="phonenum"
                    placeholder="Phone number"
                    value={this.state.phonenum}
                    valid={errors.phonenum === ""}
                    invalid={errors.phonenum !== ""}
                    onBlur={this.handleBlur("phonenum")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.phonenum}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="Registerednum" md={3}>
                  Registered Number
                </Label>
                <Col md={9}>
                  <Input
                    type="tel"
                    id="Registerednum"
                    name="Registerednum"
                    placeholder="Vehicle's Registered No."
                    value={this.state.Registerednum}
                    valid={errors.Registerednum === ""}
                    invalid={errors.Registerednum !== ""}
                    onBlur={this.handleBlur("Registerednum")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.Registerednum}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="department" md={3}>
                  Department
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="department"
                    name="department"
                    placeholder="Your Department"
                    value={this.state.department}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="designation" md={3}>
                  Designation
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="designation"
                    name="designation"
                    placeholder="Your Designation"
                    value={this.state.designation}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="Photo" md={3}>
                  Upload photos
                </Label>
                <Col md={9}>
                  <Input
                    type="file"
                    multiple
                    id="Photo"
                    name="Photo"
                    placeholder="upload your photos"
                    value={this.state.Photo}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 2, offset: 3 }}>
                  <Button type="cancel" color="danger">
                    Cancel
                  </Button>
                </Col>
                <Col md={{ size: 2 }}>
                  <Button type="submit" color="success">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Registeration;
