import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <Container fluid>
        <Row>
          <Col md={8} className="contact-left">
            <h1 className="contact-title">
              Let's start a <br />{" "}
              <span style={{ color: "var(--accent-color)" }}>project</span>{" "}
              together
            </h1>

            <Form className="contact-form">
              <div className="form-group-custom">
                <span className="form-number">01</span>
                <Form.Group>
                  <Form.Label>What's your name?</Form.Label>
                  <Form.Control type="text" placeholder="Your Name *" />
                </Form.Group>
              </div>

              <div className="form-group-custom">
                <span className="form-number">02</span>
                <Form.Group>
                  <Form.Label>What's your email?</Form.Label>
                  <Form.Control type="email" placeholder="Your Email *" />
                </Form.Group>
              </div>

              <div className="form-group-custom">
                <span className="form-number">03</span>
                <Form.Group>
                  <Form.Label>What's the name of your organization?</Form.Label>
                  <Form.Control type="text" placeholder="Organization *" />
                </Form.Group>
              </div>

              <div className="form-group-custom">
                <span className="form-number">04</span>
                <Form.Group>
                  <Form.Label>What services are you looking for?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g. Web Development, Branding..."
                  />
                </Form.Group>
              </div>

              <div className="form-group-custom">
                <span className="form-number">05</span>
                <Form.Group>
                  <Form.Label>Your message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your message..."
                  />
                </Form.Group>
              </div>

              <Button className="contact-submit-btn">Send it!</Button>
            </Form>
          </Col>

          <Col md={4} className="contact-right">
            <div className="profile-wrapper">
              <img
                src="/images/gambar5.gif"
                alt="avatar"
                className="profile-avatar"
              />
            </div>

            <div className="contact-details">
              <h6>CONTACT DETAILS</h6>
              <p>ahmadaliaddakhil@gmail.com</p>
              <p>+62 857 4950 4549</p>

              <h6 className="mt-4">BUSINESS DETAILS</h6>
              <p>Ali Addakhil</p>
              <p>Location: Indonesia</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
