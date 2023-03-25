import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import logo from "../../assets/logo.png";

const NavBarLinks = (
  <Nav className="me-auto">
    <Nav.Link href="#home">Campsite</Nav.Link>
    <Nav.Link href="#pricing">Contact</Nav.Link>
  </Nav>
);

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" height="80" />
        </Navbar.Brand>

        {NavBarLinks}
      </Container>
    </Navbar>
  );
};

export default NavBar;
