import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">EPIBOOKS</h1>
          <p className="lead">All the books you want from React and Epicode</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;
