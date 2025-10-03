import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="hero-title">
              Build Your <span style={{ color: "#bdf522" }}>Website</span>{" "}
              Portfolio with Us
            </h1>
            <p className="hero-subtitle">
              We provide modern solutions for your business growth.
            </p>
            <Button className="hero-btn">Get Started ➜</Button>
          </Col>

          <Col md={6}>
            <div className="hero-image">
              <video
                src="/videos/gambar1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="scroll-wrapper">
        <div className="scroll-content">
          <span>Upwork</span>
          <span>Fiverr</span>
          <span>Behance</span>
          <span>Trello</span>
          <span>Slack</span>
          <span>Asana</span>
          <span>Upwork</span>
          <span>Fiverr</span>
          <span>Behance</span>
          <span>Trello</span>
          <span>Slack</span>
          <span>Asana</span>
          <span>Upwork</span>
          <span>Fiverr</span>
          <span>Behance</span>
          <span>Trello</span>
          <span>Slack</span>
          <span>Asana</span>
          <span>Upwork</span>
          <span>Fiverr</span>
          <span>Behance</span>
          <span>Trello</span>
          <span>Slack</span>
          <span>Asana</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
