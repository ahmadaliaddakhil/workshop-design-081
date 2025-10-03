import React from "react";
import Pricing from "../components/Pricing/Pricing";

const PricingPage = () => {
  return (
    <div style={{ marginTop: "56px" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 fw-bold">Pricing Plans</h1>
            <p className="lead text-muted">
              Choose the perfect plan that fits your needs and budget
            </p>
          </div>
        </div>
      </div>

      <Pricing />

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold">Frequently Asked Questions</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="pricingFAQ">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                    >
                      Can I change my plan anytime?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#pricingFAQ"
                  >
                    <div className="accordion-body">
                      Yes, you can upgrade or downgrade your plan at any time.
                      Changes will be reflected in your next billing cycle.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                    >
                      Is there a free trial available?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#pricingFAQ"
                  >
                    <div className="accordion-body">
                      Yes, we offer a 14-day free trial for all our plans. No
                      credit card required to get started.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                    >
                      What payment methods do you accept?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#pricingFAQ"
                  >
                    <div className="accordion-body">
                      We accept all major credit cards, PayPal, and bank
                      transfers for annual plans.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                    >
                      Can I cancel my subscription anytime?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#pricingFAQ"
                  >
                    <div className="accordion-body">
                      Yes, you can cancel your subscription at any time. You'll
                      continue to have access until the end of your current
                      billing period.
                    </div>
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

export default PricingPage;
