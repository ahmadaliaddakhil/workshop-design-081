import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      features: ["1 Project", "Basic Support", "Email Updates"],
    },
    {
      name: "Premium",
      price: "$99",
      features: ["Unlimited Projects", "24/7 Support", "All Features"],
    },
    {
      name: "Standard",
      price: "$49",
      features: ["5 Projects", "Priority Support", "Analytics Access"],
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <Container>
        <h1 className="section-title text-center mb-5">Pricing Plans</h1>
        <Row>
          {plans.map((plan, index) => {
            const isMiddle = index === 1;

            return (
              <Col md={4} key={index}>
                <Card
                  className={`pricing-card text-center p-4 ${
                    isMiddle ? "pricing-card-featured" : "pricing-card-normal"
                  }`}
                >
                  <h4 className="plan-name">{plan.name}</h4>
                  <h2 className="plan-price">{plan.price}</h2>
                  <ul className="plan-features list-unstyled mt-3 mb-4">
                    {plan.features.map((Feature, i) => (
                      <li key={i}>{Feature}</li>
                    ))}
                  </ul>
                  <Button className="plan-btn">
                    {isMiddle ? "Get Started" : "Choose Plan"}
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
