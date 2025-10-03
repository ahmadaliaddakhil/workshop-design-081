import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={6}>
            <h5 className="footer-brand">NgodingWeb</h5>
            <p className="footer-text">
              Building digital solutions with innovation and passion.
            </p>
          </Col>
          <Col md={6} className="text-md-end text-start mt-3 mt-md-0">
            <p className="footer-copy">
              © {new Date().getFullYear()} NgodingWeb. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
