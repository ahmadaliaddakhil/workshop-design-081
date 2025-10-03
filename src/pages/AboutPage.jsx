import React from "react";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";

const AboutPage = () => {
  return (
    <div style={{ marginTop: "56px" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 fw-bold">About Us</h1>
            <p className="lead text-muted">
              Learn more about our company, mission, and team
            </p>
          </div>
        </div>
      </div>

      <About />

      {/* Team Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Meet Our Team</h2>
              <p className="lead text-muted">
                The talented people behind our success
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <h3 className="mb-0">JD</h3>
                  </div>
                  <h5 className="fw-bold">John Doe</h5>
                  <p className="text-primary mb-2">CEO & Founder</p>
                  <p className="text-muted small">
                    Visionary leader with 10+ years of experience in tech
                    industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div
                    className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <h3 className="mb-0">JS</h3>
                  </div>
                  <h5 className="fw-bold">Jane Smith</h5>
                  <p className="text-success mb-2">CTO</p>
                  <p className="text-muted small">
                    Technology expert passionate about innovative solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div
                    className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <h3 className="mb-0">MB</h3>
                  </div>
                  <h5 className="fw-bold">Mike Brown</h5>
                  <p className="text-warning mb-2">Lead Designer</p>
                  <p className="text-muted small">
                    Creative designer with an eye for beautiful user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default AboutPage;
