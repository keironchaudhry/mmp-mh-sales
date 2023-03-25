import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";

const NavBarLinks = (
  <>
    <NavLink
      className={`me-3 ${styles.NavLinks}`}
      href="https://malagamonteparc.com/"
      target="_blank"
    >
      <i class="fa-solid fa-campground"></i>Campsite
    </NavLink>
    <NavLink className={styles.NavLinks} to="/contact">
      <i class="fa-regular fa-comment"></i>Contact
    </NavLink>
  </>
);

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" height="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">{NavBarLinks}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
