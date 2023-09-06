import React, { Component } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      errors: {
        firstName: "",
        lastName: "",
      },
    };
  }

  validateForm() {
    const { firstName, lastName } = this.state;
    let errors = {};

    if (firstName.trim() === "") {
      errors.firstName = "First name is required!";
      console.log(errors.firstName);
    }

    if (lastName.trim() === "") {
      errors.lastName = "Last name is required!";
      console.log(errors.lastName);
    }

    this.setState({ errors });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.validateForm();

    const { firstName, lastName, email } = this.state;
    console.log("FORM INVIATO");
  };

  render() {
    console.log(this.state);
    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
}

export default ReservationForm;
