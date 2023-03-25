import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";

const NavBarLinks = (
  <Nav>
    <Nav.Link
      className={styles.NavLinks}
      href="https://malagamonteparc.com/"
      target="_blank"
    >
      <i class="fa-solid fa-campground"></i>Campsite
    </Nav.Link>
    <Nav.Link className={styles.NavLinks} href="#">
      <i class="fa-regular fa-comment"></i>Contact
    </Nav.Link>
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
