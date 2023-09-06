import React, { Component } from "react";
import { Row, Col, Card, Container, Button, Form } from "react-bootstrap";
import fantasy from "../../data/fantasy.json";
import MyCard from "../card/MyCard";

export class LatestRelease extends Component {
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
    const { bookName } = this.state;
    console.log(bookName);

    const filteredBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(bookName.toLowerCase())
    );

    console.log(filteredBooks);
    return (
      <div>
        <Form noValidate onSubmit={this.handleSubmit} className="mb-3 mx-auto">
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className="mx-auto">Book name</Form.Label>
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

          {/* <Button type="search">Search Books</Button> */}
        </Form>
        <Container>
          <Row>
            {filteredBooks &&
              filteredBooks.map((book) => (
                <Col xs={12} sm={6} md={4} lg={3} className="p-2">
                  <MyCard
                    url={book.img}
                    title={book.title}
                    description={book.category}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default LatestRelease;
