import React, { useEffect } from "react";
import Header from "../common/Header";
import About from "../common/About";
import Footer from "../common/Footer";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import { apiUrl } from "../common/http";
import LatestServices from "../common/LatestServices";
import LatestProjects from "../common/LatestProjects";
import LatestArticles from "../common/LatestArticles";
import ShowTestimonials from "../common/ShowTestimonials";
import { Link } from "react-router-dom";
import useAnimationReveal from "../../hooks/useAnimation";

const Home = () => {
  useAnimationReveal();

  useEffect(() => {
    document.title = "UrbanEdge Constructions | Building Excellence";
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="section-1 home-hero">
          <div className="hero d-flex  align-items-center">
            <div className="hero-overlay"></div>
            <div className="hero-particles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="container-fluid position-relative">
              <div className="text-center hero-main-content">
                <span className="hero-span mt-4">
                  <i className="bi bi-building me-2"></i>
                  Welcome To UrbanEdge Constructions
                </span>
                <h1 className="hero-main-title">
                  Crafting dreams with <br /> precision and excellence.
                </h1>
                <span className="hero-title-divider"></span>
                <p className="hero-paragraph">
                  We are a team of dedicated professionals committed to
                  delivering exceptional <br /> construction services that
                  exceed our clients' expectations.
                </p>
                <div className="mt-4 home hero-buttons">
                  <Link to="/contact" className="btn btn-primary large hero-btn hero-btn-primary">
                    <span>Contact Now</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                  <Link to="/projects" className="btn btn-outline-light large hero-btn hero-btn-outline ms-2">
                    <i className="bi bi-grid me-2"></i>
                    View Projects
                  </Link>
                </div>
                <div className="hero-scroll-indicator mt-5">
                  <div className="mouse">
                    <div className="wheel"></div>
                  </div>
                  <span>Scroll Down</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About us section */}
        <About />

        <LatestServices />

        {/* Why choose us section */}
        <section className="section-4 why-choose-section py-5">
          <div className="container py-5">
            <div className="section-header text-center" data-reveal="fade-up">
              <span className="section-tag">Why Choose Us</span>
              <h2>Discover our wide variety of projects</h2>
              <span className="section-divider"></span>
              <p>
                We have a wide variety of projects that we have completed for
                our clients. We have a team of experienced professionals <br />
                who are dedicated to delivering high-quality work and
                exceptional customer service.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4" data-reveal="fade-up" style={{ transitionDelay: "0s" }}>
                <div className="card shadow border-0 p-4 why-card">
                  <div className="card-icon">
                    <img src={Icon1} alt="Innovative Solutions" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <div>
                    <p>
                      Small actions create big impact. We leverage the latest
                      technology and innovation to deliver superior construction
                      outcomes.
                    </p>
                  </div>
                  <Link to="/services" className="stretched-link"></Link>
                </div>
              </div>
              <div className="col-md-4" data-reveal="fade-up" style={{ transitionDelay: "0.15s" }}>
                <div className="card shadow-card border-0 p-4 why-card">
                  <div className="card-icon">
                    <img src={Icon2} alt="Quality Assurance" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Uncompromised Quality</h3>
                  </div>
                  <div>
                    <p>
                      Every project we deliver meets the highest standards of
                      quality and safety, ensuring lasting value for our
                      clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-reveal="fade-up" style={{ transitionDelay: "0.3s" }}>
                <div className="card shadow-card border-0 p-4 why-card">
                  <div className="card-icon">
                    <img src={Icon3} alt="Experienced Team" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Expert Team</h3>
                  </div>
                  <div>
                    <p>
                      Our teams of experienced engineers, architects, and
                      craftsmen work together to bring your vision to life with
                      precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LatestProjects />

        <ShowTestimonials />

        <LatestArticles />
      </main>
      <Footer />
    </>
  );
};

export default Home;