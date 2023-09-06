import React, { Component } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import fantasy from "../../data/fantasy.json";
import "../../index.css";

export class MyCard extends Component {
  render() {
    return (
      <Card className="p-2">
        <Card.Img variant="top" src={this.props.url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MyCard;
