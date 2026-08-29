import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../../public/favicon.png";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-main py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-4 mb-md-0">
                <div className="footer-brand d-flex align-items-center mb-3">
                  <div className="footer-logo-icon me-2">
                    <img src={favicon} alt="UrbanEdge" />
                  </div>
                  <div>
                    <div className="footer-logo-name">
                      <span className="footer-logo-urban">Urban</span>
                      <span className="footer-logo-edge">Edge</span>
                    </div>
                    <div className="footer-logo-sub">Constructions</div>
                  </div>
                </div>
                <p className="footer-about-text">
                  We deliver exceptional construction services that exceed
                  expectations. Building the future with precision,
                  integrity, and value.
                </p>
                <div className="footer-social">
                  <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                  <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                </div>
              </div>

              <div className="col-md-3 mb-4 mb-md-0">
                <h3 className="footer-title">Our Services</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/services">
                      <i className="bi bi-chevron-right"></i> Specialized Construction
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <i className="bi bi-chevron-right"></i> Residential Construction
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <i className="bi bi-chevron-right"></i> Commercial Construction
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <i className="bi bi-chevron-right"></i> Industrial Construction
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-4 mb-md-0">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/">
                      <i className="bi bi-chevron-right"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <i className="bi bi-chevron-right"></i> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <i className="bi bi-chevron-right"></i> Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects">
                      <i className="bi bi-chevron-right"></i> Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs">
                      <i className="bi bi-chevron-right"></i> Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="bi bi-chevron-right"></i> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <h3 className="footer-title">Contact Info</h3>
                <ul className="footer-contact">
                  <li>
                    <i className="bi bi-geo-alt"></i>
                    <span>B-13x, Dijkot FaisalAbad</span>
                  </li>
                  <li>
                    <i className="bi bi-envelope"></i>
                    <span>info@urbanedgeconstructions.com</span>
                  </li>
                  <li>
                    <i className="bi bi-telephone"></i>
                    <span>+92 300 1234567</span>
                  </li>
                  <li>
                    <i className="bi bi-clock"></i>
                    <span>Mon - Sat: 9:00 - 18:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="mb-0">© 2024 UrbanEdge Constructions. All Rights Reserved.</p>
            <p className="mb-0">
              Crafted with <i className="bi bi-heart-fill"></i> by UrbanEdge Team
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;