import React, { Component } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",

      errors: {
        bookName: "",
      },
    };
  }

  validateForm() {
    const { bookName } = this.state;
    let errors = {};

    if (bookName.trim() === "") {
      errors.bookName = "Book name is required!";
      console.log(errors.bookName);
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

    const { bookName } = this.state;
    console.log("LIBRI CERCATI!");
  };

  render() {
    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Book name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter the book's name"
              name="bookName"
              value={this.state.bookName}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Row>

        <Button type="search">Search Books</Button>
      </Form>
    );
  }
}

export default SearchForm;
