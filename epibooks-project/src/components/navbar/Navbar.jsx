import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import navLinks from "../../data/navLinks";

const Navigation = () => {
  const navStyle = {
    backgroundColor: "rgba(34, 113, 179, 0.2)",
  };

  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(navLinks);
    console.log(links);

    return () => {};
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={navStyle}>
        <Container>
          <Navbar.Brand href="#home">EPIBOOKS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Nav.Link href="#" key={nanoid()}>
                  Home
                </Nav.Link>
              </Link>
              <Nav.Link href="#" key={nanoid()}>
                About
              </Nav.Link>
              <Nav.Link href="#" key={nanoid()}>
                Browse
              </Nav.Link>

              {/*links.map((link) => (
                <Nav.Link href={link.href} key={nanoid()}>
                  {link.name}
                </Nav.Link>
              ))*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
