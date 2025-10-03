import React from "react";
import Contact from "../components/Contact/Contact";

const ContactPage = () => {
  return (
    <div style={{ marginTop: "56px" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="lead text-muted">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>
        </div>
      </div>

      <Contact />

      {/* Map Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="fw-bold">Find Us Here</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="bg-light rounded p-5 text-center"
                style={{ minHeight: "400px" }}
              >
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div>
                    <h3 className="text-muted mb-3">🗺️</h3>
                    <h4 className="text-muted">Interactive Map</h4>
                    <p className="text-muted">
                      Google Maps integration would go here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
