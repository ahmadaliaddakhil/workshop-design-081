import React from "react";
import { Container, Carousel } from "react-bootstrap";

const Clients = () => {
  const testimonials = [
    {
      name: "Kim ji won",
      feedback: "Keren suamiku",
      avatar: "/images/istri1.jpg",
    },
    {
      name: "IU",
      feedback: "Kerja bagus sayang",
      avatar: "/images/istri2.jpg",
    },
    {
      name: "Go youn jung",
      feedback: "I love u sayang, kapan ke korea?",
      avatar: "/images/istri3.jpg",
    },
  ];

  return (
    <section className="clients-section" id="clients">
      <div className="clients-wrapper">
        <div className="client-image-left">
          <img src="/images/elemen1.svg" alt="element" className="img-fluid" />
        </div>

        <Container>
          <h2 className="section-title text-center mb-5">
            What Our Clients Say
          </h2>

          <Carousel indicators={true} controls={false} interval={3500}>
            {testimonials.map((client, index) => (
              <Carousel.Item key={index}>
                <div className="client-carousel-card text-center">
                  <img
                    src={client.avatar}
                    alt={client.name}
                    className="client-avatar mb-4"
                  />
                  <h4 className="client-name">{client.name}</h4>
                  <p className="client-feedback mt-3">"{client.feedback}"</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>

        <div className="client-image-right">
          <img src="/images/elemen1.svg" alt="element" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
