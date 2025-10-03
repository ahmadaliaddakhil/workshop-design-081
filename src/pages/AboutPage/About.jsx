import { useState } from "react";
import "./About.css";

function About() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header */}
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary mb-3">
                INI ADALAH HALAMAN ABOUT
              </h2>
              <p className="lead text-muted">
                Halaman tentang aplikasi ini dan fitur-fitur yang tersedia.
              </p>
            </div>

            {/* Counter Card */}
            <div className="card shadow-lg mb-5">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">
                  <i className="bi bi-calculator me-2"></i>
                  Interactive Counter
                </h5>
              </div>
              <div className="card-body text-center p-4">
                <div className="mb-4">
                  <span className="badge bg-secondary fs-4 px-3 py-2">
                    Count: {count}
                  </span>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <button
                    className="btn btn-success btn-lg me-md-2"
                    onClick={() => setCount(count + 1)}
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    Increment
                  </button>
                  <button
                    className="btn btn-danger btn-lg me-md-2"
                    onClick={() => setCount(count - 1)}
                  >
                    <i className="bi bi-dash-circle me-2"></i>
                    Decrement
                  </button>
                  <button
                    className="btn btn-secondary btn-lg"
                    onClick={() => setCount(0)}
                  >
                    <i className="bi bi-arrow-clockwise me-2"></i>
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Info Alert */}
            <div className="alert alert-info" role="alert">
              <h4 className="alert-heading">
                <i className="bi bi-info-circle me-2"></i>
                Tips!
              </h4>
              <p>
                Ini adalah contoh penggunaan Bootstrap dalam React. Anda bisa
                menggunakan berbagai komponen Bootstrap seperti cards, buttons,
                alerts, dan banyak lagi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
