import React from "react";
import Aboutimg from "../../assets/images/about-us.jpg";
import { Link } from "react-router-dom";
import useAnimationReveal from "../../hooks/useAnimation";

const About = () => {
  useAnimationReveal();

  return (
    <section className="section-2 about-section py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6" data-reveal="fade-right">
            <div className="about-image-wrap">
              <img src={Aboutimg} alt="About Us" className="img-fluid about-image" />
              <div className="about-experience-badge">
                <div className="experience-number">15+</div>
                <div className="experience-text">Years of<br />Experience</div>
              </div>
              <div className="about-image-overlay"></div>
            </div>
          </div>

          <div className="col-md-6" data-reveal="fade-left">
            <div className="about-content ps-lg-4">
              <span className="section-tag">About Us</span>
              <h2>Crafting structures that last a lifetime</h2>
              <span className="section-divider"></span>
              <p className="about-lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nihil qui natus itaque quia odio et, vero quod quasi.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
                error repellat eveniet fuga saepe sint doloribus exercitationem
                qui, magni sed tempore facere minima recusandae. Odio quasi
                laborum possimus dolorem officia, explicabo unde!
              </p>
              <div className="about-features mt-4">
                <div className="about-feature">
                  <i className="bi bi-patch-check-fill"></i>
                  <div>
                    <h4>Certified Professionals</h4>
                    <p>Licensed & experienced engineers</p>
                  </div>
                </div>
                <div className="about-feature">
                  <i className="bi bi-shield-check-fill"></i>
                  <div>
                    <h4>Safety First</h4>
                    <p>Strict safety compliance standards</p>
                  </div>
                </div>
                <div className="about-feature">
                  <i className="bi bi-clock-fill"></i>
                  <div>
                    <h4>On-Time Delivery</h4>
                    <p>Projects completed on schedule</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary about-btn mt-4">
                Learn More About Us
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;