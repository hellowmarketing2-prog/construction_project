import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { Link } from "react-router-dom";
import useAnimationReveal from "../../hooks/useAnimation";

const Services = () => {
  const [services, setServices] = useState([]);
  useAnimationReveal();

  const fetchAllServices = async () => {
    const res = await fetch(apiUrl + "get_services", {
      method: "GET",
    });
    const result = await res.json();
    setServices(result.data);
  };
  useEffect(() => {
    fetchAllServices();
  }, []);

  return (
    <>
      <Header />
      <Hero
        preHeading="Quality . Integrity . Value"
        heading="Services"
        text="We are a team of dedicated professionals committed to delivering exceptional construction services."
      />

      <section className="section-3 bg-light py-5 services-page">
        <div className="container py-5">
          <div className="section-header text-center" data-reveal="fade-up">
            <span>Our Services</span>
            <h2>Our Construction Services</h2>
            <p>
              We deliver practical, high-quality construction solutions for
              homes, businesses, and large-scale developments.
            </p>
          </div>
          <div className="row pt-4">
            {services &&
              services.map((service, index) => {
                return (
                  <div
                    key={service.id}
                    className="col-md-4 col-lg-4"
                    data-reveal="fade-up"
                    style={{ transitionDelay: `${(index % 3) * 0.15}s` }}
                  >
                    <div className="item service-card">
                      <div className="service-image">
                        <img
                          src={`${fileUrl}uploads/services/small/${service.image}`}
                          className="w-100"
                          alt={service.title}
                        />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{service.title}</h3>
                        </div>
                        <div className="service-content">
                          <p>{service.short_desc}</p>
                        </div>
                        <Link
                          to={`/service/${service.id}`}
                          className="btn btn-primary mt-3 small"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
