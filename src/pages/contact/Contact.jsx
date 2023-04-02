import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";

const Contact = () => {
  return (
    <Container className="d-inline-flex">
      <Row className={`py-3 pe-1 me-4 col-12 ${styles.ContactContainer}`}>
        <ContactImage />
        <ContactForm />
      </Row>
    </Container>
  );
};

export default Contact;
