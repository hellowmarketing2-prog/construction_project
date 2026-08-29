import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import favicon from "../../../public/favicon.png";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "active"
      : location.pathname.startsWith(path + "/") && path === "/services" || location.pathname.startsWith(path + "/") && path === "/projects"
      ? "active"
      : location.pathname.startsWith(path + "/") && path === "/article"
      ? "active"
      : "";

  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="top-bar d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="top-bar-left">
            <span>
              <i className="bi bi-telephone"></i> +92 300 1234567
            </span>
            <span className="ms-4">
              <i className="bi bi-envelope"></i> info@urbanedgeconstructions.com
            </span>
          </div>
          <div className="top-bar-right">
            <span className="me-3">Mon - Sat: 9:00 - 18:00</span>
            <span className="top-bar-social">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <Navbar expand="lg" className="navbar-custom">
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            <div className="logo-icon">
              <img src={favicon} alt="UrbanEdge Constructions" className="navbar-logo" />
              <span className="logo-shine"></span>
            </div>
            <div className="logo-text">
              <span className="logo-main">
                <span className="logo-urban">Urban</span>
                <span className="logo-accent">Edge</span>
              </span>
              <span className="logo-sub">Constructions</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-menu">
              <Nav.Link as={Link} to="/" className={`nav-link-custom ${isActive("/")}`}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className={`nav-link-custom ${isActive("/about")}`}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className={`nav-link-custom ${isActive("/services")} ${isActive("/service")}`}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" className={`nav-link-custom ${isActive("/projects")} ${isActive("/project")}`}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" className={`nav-link-custom ${isActive("/blogs")} ${isActive("/article")}`}>
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className={`nav-link-custom ${isActive("/contact")}`}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;