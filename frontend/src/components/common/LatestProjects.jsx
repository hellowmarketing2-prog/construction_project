import React, { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "./http";
import { Link } from "react-router-dom";
import useAnimationReveal from "../../hooks/useAnimation";

const LatestProjects = () => {
  const [Projects, setProjects] = useState([]);
  useAnimationReveal();

  const fetchlatestProjects = async () => {
    const res = await fetch(apiUrl + "get_latest_projects?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    setProjects(result.data);
  };
  useEffect(() => {
    fetchlatestProjects();
  }, []);

  return (
    <>
      <section className="section-3 projects-section py-5">
        <div className="container-fluid py-5">
          <div className="section-header text-center" data-reveal="fade-up">
            <span>Our Projects</span>
            <h2>Check Out Our Recent Work</h2>
            <p>
              We take pride in our work and are committed to delivering
              exceptional results for our clients.
            </p>
          </div>
          <div className="row pt-4">
            {Projects &&
              Projects.map((project, index) => {
                return (
                  <div
                    key={project.id}
                    className="col-md-3 col-lg-3"
                    data-reveal="fade-up"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="item">
                      <div className="service-image">
                        <img
                          src={`${fileUrl}uploads/projects/small/${project.image}`}
                          className="w-100"
                          alt={project.title}
                        />
                        <span className="service-icon-overlay">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{project.title}</h3>
                        </div>
                        <div className="service-content">
                          <p>{project.short_desc}</p>
                        </div>
                        <Link
                          to={`/project/${project.id}`}
                          className="btn btn-primary small mt-3"
                        >
                          View Details
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

export default LatestProjects;