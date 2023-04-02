import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import styles from "./Contact.module.css";
import appStyles from "../../App.module.css";
import ContactForm from "./ContactForm";
import heroImage from "../../assets/heroimagepool.png";

const Contact = () => {
  return (
    <Container className="d-inline-flex">
      <Row className={`py-3 pe-1 me-4 col-12 ${styles.ContactContainer}`}>
        <Image src={heroImage} className={`${appStyles.Image} mt-5`} />
        <ContactForm />
      </Row>
    </Container>
  );
};

export default Contact;
