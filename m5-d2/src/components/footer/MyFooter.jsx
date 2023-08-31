import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export class MyFooter extends Component {
  render() {
    return (
      <footer>
        <Container>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
      </footer>
    )
  }
}

export default MyFooter