import { useState } from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">HELLO WORLD</h1>
              <p className="lead mb-4">
                Selamat datang di aplikasi React dengan Vite dan Bootstrap!
              </p>
              <button className="btn btn-light btn-lg me-3">Get Started</button>
              <button className="btn btn-outline-light btn-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col">
            <h2 className="display-6 mb-3">Features</h2>
            <p className="lead text-muted">Fitur-fitur unggulan aplikasi ini</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-lightning-charge-fill fs-1 text-primary"></i>
                </div>
                <h5 className="card-title">Fast</h5>
                <p className="card-text">
                  Dibangun dengan Vite untuk performa yang optimal
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-gear-fill fs-1 text-success"></i>
                </div>
                <h5 className="card-title">Modern</h5>
                <p className="card-text">
                  Menggunakan React 19 dan teknologi terdepan
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-palette-fill fs-1 text-warning"></i>
                </div>
                <h5 className="card-title">Beautiful</h5>
                <p className="card-text">
                  Desain yang menarik dengan Bootstrap 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
