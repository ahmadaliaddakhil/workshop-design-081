import React from "react";
import Services from "../components/Services/Services";

const ServicesPage = () => {
  return (
    <div style={{ marginTop: "56px" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 fw-bold">Our Services</h1>
            <p className="lead text-muted">
              Comprehensive solutions for all your business needs
            </p>
          </div>
        </div>
      </div>
      <Services />

      {/* Additional Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-bold mb-4">Why Choose Our Services?</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="p-4">
                <div className="display-4 text-primary mb-3">⚡</div>
                <h5 className="fw-bold">Fast Delivery</h5>
                <p className="text-muted">
                  Quick turnaround times without compromising quality
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="p-4">
                <div className="display-4 text-primary mb-3">🏆</div>
                <h5 className="fw-bold">Quality Assured</h5>
                <p className="text-muted">
                  High-quality solutions that exceed expectations
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="p-4">
                <div className="display-4 text-primary mb-3">💰</div>
                <h5 className="fw-bold">Competitive Pricing</h5>
                <p className="text-muted">
                  Affordable rates with transparent pricing
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="p-4">
                <div className="display-4 text-primary mb-3">🤝</div>
                <h5 className="fw-bold">24/7 Support</h5>
                <p className="text-muted">
                  Round-the-clock support for all your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
