import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const servicesData = [
  {
    title: "Web Development",
    desc: "Modern website & web app solutions with clean architecture.",
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive, user-focused interface and experience design.",
  },
  {
    title: "Mobile App",
    desc: "Cross-platform mobile apps that scale across devices.",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <Container>
        <h2 className="services-title text-center">Our Services</h2>
        <Row className="justify-content-center">
          {servicesData.map((service, index) => (
            <Col
              key={index}
              lg={4}
              md={6}
              sm={12}
              className="d-flex align-items-stretch"
            >
              <div className="service-card">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </Col>
          ))}
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

export default Services;
