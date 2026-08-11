import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import ShowTestimonial from "../common/ShowTestimonials";
import Header from "../common/Header";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { Link, useParams } from "react-router-dom";

const projectDetails = () => {
  const params = useParams();
  const [project, setproject] = useState([]);
  const [projects, setprojects] = useState([]);
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
          preHeading="Quality . Itigrity . Value"
          heading={`${project.title}`}
          text=" "
        />
        <section className="section-10 sidebar">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow border-0 sidebar">
                  <div className="card-body px-4 py-4">
                    <h3 className="mt-2 mb-3">Insights</h3>
                    <ul>
                      {/* {projects &&
                        projects.map((project) => {
                          return ( */}
                      {project.location && (
                        <li key={project.id} className="mb-2">
                          <span className="text-body-secondary">Location</span>
                          <p>{project.location}</p>
                        </li>
                      )}
                      {project.construction_type && (
                        <li  className="mb-2">
                          <span className="text-body-secondary">
                            Construction_type
                          </span>
                          <p>{project.construction_type}</p>
                        </li>
                      )}
                      {project.sector && (
                        <li className="mb-2">
                          <span className="text-body-secondary">Sector</span>
                          <p>{project.sector}</p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div>
                  <img
                    className="w-100"
                    src={`${fileUrl}uploads/projects/large/${project.image}`}
                    alt=""
                  />
                </div>
                <h3 className="py-3">{project.title}</h3>
                <div
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
