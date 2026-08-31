import React, { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "./http";
import { Link } from "react-router-dom";
import useAnimationReveal from "../../hooks/useAnimation";

const LatestServices = () => {
  const [services, setServices] = useState([]);
  useAnimationReveal();

  const fetchlatestServices = async () => {
    const res = await fetch(apiUrl + "get_latest_services?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    setServices(result.data);
  };
  useEffect(() => {
    fetchlatestServices();
  }, []);
  return (
    <>
      <section className="section-3 bg-light py-5 services-section">
        <div className="container-fluid py-5">
          <div className="section-header text-center" data-reveal="fade-up">
            <span>Our Services</span>
            <h2>Our Construction Services</h2>
            <p>
              From residential builds to commercial developments, we create
              durable, efficient spaces designed around your goals.
            </p>
          </div>
          <div className="row pt-4">
            {services &&
              services.map((service, index) => {
                return (
                  <div
                    key={service.id}
                    className="col-md-3 col-lg-3"
                    data-reveal="fade-up"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="item">
                      <div className="service-image">
                        <img
                          src={`${fileUrl}uploads/services/small/${service.image}`}
                          className="w-100"
                          alt={service.title}
                        />
                        <span className="service-icon-overlay">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
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
                          className="btn btn-primary small"
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
    </>
  );
};

export default LatestServices;
