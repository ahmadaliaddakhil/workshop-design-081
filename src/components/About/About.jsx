import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <div className="about-image-wrapper">
            <img src="/images/gambar6.gif" alt="Team" className="about-image" />
            <div className="explore-circle">
              <span>Explore More</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="about-toptext">✱ WELCOME TO OUR FREELANCE SOLUTIONS</p>

          <h2 className="about-title">
            Driving <span>growth</span> through smarter SEO
          </h2>

          <div className="about-tags">
            <span>✱ Client-Centric Approach</span>
            <span>✱ Seamless Communication</span>
          </div>

          <div className="about-features">
            <div className="feature-box">
              <span>✱</span>
              <p>Dedicated to Client Success</p>
            </div>
            <div className="feature-box">
              <span>✱</span>
              <p>Affordable Service With Quality</p>
            </div>
          </div>

          <div className="about-bottom">
            <div className="testimonial">
              <img
                src="/images/gambar5.gif"
                alt="Person"
                className="testimonial-img"
              />
              <div className="testimonial-info">
                <h5>Kucing Garong</h5>
                <p>Marketing Director</p>
              </div>
            </div>

            <button className="about-button">
              More About <span>➜</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
