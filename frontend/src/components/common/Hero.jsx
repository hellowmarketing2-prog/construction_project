import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ preHeading, heading, text, showCta = false }) => {
  return (
    <>
      <section className="section-7 inner-hero">
        <div className="hero d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container position-relative">
            <div className="text-left hero-content">
              <span className="hero-preheading">{preHeading}</span>
              <h1 className="hero-title">{heading}</h1>
              <span className="hero-divider"></span>
              <p className="hero-text" dangerouslySetInnerHTML={{ __html: text }}></p>
              {showCta && (
                <div className="hero-cta mt-4">
                  <Link to="/contact" className="btn btn-primary large me-2">
                    Get A Quote
                  </Link>
                  <Link to="/projects" className="btn btn-outline-light large">
                    Our Projects
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;