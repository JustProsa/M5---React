import React, {Component} from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navLinks } from "../../data/myNavData";
import {nanoid} from "nanoid"
// import NavDropdown from 'react-bootstrap/NavDropdown';

export class MyNav extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
       <Container>
         <Navbar.Brand href="#home">EPIBOOKS</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
            {/* {this.props.links.map((link) => {
              return(
                <Nav.Link key={nanoid()} href={link}>{link.name}</Nav.Link>
              )
            })}  */}
            <Nav.Link key={nanoid()} href="#">Home</Nav.Link>
            <Nav.Link key={nanoid()} href="#">About</Nav.Link>
            <Nav.Link key={nanoid()} href="#">Browse</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    )
  }
}

export default MyNav;