import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import ShowTestimonial from "../common/ShowTestimonials";
import Header from "../common/Header";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { useParams } from "react-router-dom";
import useAnimationReveal from "../../hooks/useAnimation";

const projectDetails = () => {
  const params = useParams();
  const [project, setproject] = useState([]);
  const [projects, setprojects] = useState([]);
  useAnimationReveal();

  const fetchprojects = async () => {
    const res = await fetch(`${apiUrl}get_projects`, {
      method: "GET",
    });
    const result = await res.json();
    setprojects(result.data);
  };
  const fetchproject = async () => {
    const res = await fetch(`${apiUrl}get_project/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    setproject(result.data);
  };
  useEffect(() => {
    fetchprojects();
    fetchproject();
  }, [params.id]);
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality . Integrity . Value"
          heading={`${project.title}`}
          text=" "
        />
        <section className="section-10 sidebar project-details-section">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4" data-reveal="fade-right">
                <div className="card shadow border-0 sidebar">
                  <div className="card-body px-4 py-4">
                    <h3 className="mt-2 mb-3">Project Insights</h3>
                    <ul>
                      {project.location && (
                        <li key={project.id} className="mb-3">
                          <span className="text-body-secondary d-block">
                            Location
                          </span>
                          <p className="mb-0">{project.location}</p>
                        </li>
                      )}
                      {project.construction_type && (
                        <li className="mb-3">
                          <span className="text-body-secondary d-block">
                            Construction Type
                          </span>
                          <p className="mb-0">{project.construction_type}</p>
                        </li>
                      )}
                      {project.sector && (
                        <li className="mb-3">
                          <span className="text-body-secondary d-block">
                            Sector
                          </span>
                          <p className="mb-0">{project.sector}</p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8" data-reveal="fade-left">
                <div className="project-detail-image">
                  <img
                    className="w-100"
                    src={`${fileUrl}uploads/projects/large/${project.image}`}
                    alt={project.title}
                  />
                </div>
                <h3 className="py-3">{project.title}</h3>
                <div
                  className="project-detail-content"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-11 bg-light py-5">
          <ShowTestimonial />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default projectDetails;
