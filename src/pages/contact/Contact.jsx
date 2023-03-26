import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import styles from "./Contact.module.css";
import appStyles from "../../App.module.css";
import heroImage from "../../assets/heroimagepool.png";

const ContactForm = (
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

const Contact = () => {
  return (
    <Container className="d-inline-flex">
      <Row className={`py-5 pe-2 me-4 col-6 ${styles.ContactContainer}`}>
        <Col className="text-center">
          <div className="mb-3">
            <h3>Our contact details:</h3>
          </div>
          <div className="d-block text-center justify-content-around">
            <p className="ml-auto">E-mail: info@malagamonteparc.com</p>
            <p className="ml-auto">Telephone: (0034) 951 296 028</p>
          </div>
        </Col>
        <Image src={heroImage} className={`${appStyles.Image} mt-5`} />
      </Row>
      <Row className={`py-5 pe-2 me-4 col-6 ${styles.ContactContainer}`}>
        {ContactForm}
      </Row>
    </Container>
  );
};

export default Contact;
