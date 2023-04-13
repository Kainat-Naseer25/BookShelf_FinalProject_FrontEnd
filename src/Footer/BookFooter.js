import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../NavBars/bookshelf.png";

const BookFooter = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ background: "linear-gradient(to left, #36b8f0, #e95897)" }}
    >
      <section className="d-flex justify-content-center text-lg justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Welcome to our bookshelf library</span>
        </div>
        <div>
          <span className="me-4 text-white">
            <i className="fab fa-facebook-f"></i>
          </span>
          <span className="me-4 text-white">
            <i className="fab fa-twitter"></i>
          </span>
          <span className="me-4 text-white">
            <i className="fab fa-google"></i>
          </span>
          <span className="me-4 text-white">
            <i className="fab fa-instagram"></i>
          </span>
          <span className="me-4 text-white">
            <i className="fab fa-linkedin"></i>
          </span>
          <span className="me-4 text-white">
            <i className="fab fa-github"></i>
          </span>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row m-5">
            <img
              alt="logo"
              src={logo}
              style={{
                height: 120,
                width: 150,
              }}
            />

            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">BookShelf Library</h6>
              <p>
                Our platform is designed to help book enthusiasts discover new
                titles, share their favorite reads, and connect with like-minded
                individuals. Explore our collection and embark on a journey of
                knowledge and imagination. Happy reading!"
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-code-branch me-3"></i>Features
              </h6>
              <p>Public Library</p>
              <p>Private Library</p>
              <p>BookShelf</p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fasfa-envelope me-3"></i>Contact
              </h6>

              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        By Maimoona, Shazwa and Kainat
      </div>
    </footer>
  );
};

export default BookFooter;
