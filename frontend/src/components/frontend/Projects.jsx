import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero';
import constructionimg from "../../assets/images/construction3.jpg";
import { apiUrl, fileUrl } from '../common/http';
import { useEffect, useState } from 'react';
const Projects = () => {
   const [projects, setProjects] = useState([]);
      const fetchAllProjects = async () => {
        const res = await fetch(apiUrl + "get_projects", {
          method: "GET",
        });
        const result = await res.json();
        setProjects(result.data);
      };
      useEffect(() => {
        fetchAllProjects();
      }, []);
  return (
    <>
    <Header/>
    <main>
 <Hero preHeading='Quality . Itigrity . Value'
         heading='Our Projects' 
         text=' We are a team of dedicated professionals committed to
                  delivering exceptional
                    <br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                  consectetur officiis?'/>

                  <section className="section-3 bg-light py-5">
                            <div className="container py-5">
                              <div className="section-header text-center ">
                                <span>Our Projects</span>
                                <h2>Check Out Our Recent Work</h2>
                                <p>
                                  We take pride in our work and are committed to delivering
                                  exceptional results for our clients.
                                </p>
                              </div>
                              <div className="row pt-4">

                             { 
                              projects &&
                                projects.map((project) => {
                                  return(
                                <div key={project.id} className="col-md-4 col-lg-4">

                                  <div className="item">
                                    <div className="service-image ">
                                      <img src={`${fileUrl}uploads/projects/small/${project.image}`} className="w-100" />
                                    </div>
                                    <div className="service-body">
                                      <div className="service-title">
                                        <h3>{project.title}</h3>
                                      </div>
                  
                                      <div className="service-content ">
                                        <p>
                                        {project.short_desc}
                                        </p>
                                      </div>
                                      <a href="#contact" className="btn btn-primary small mt-3">
                                        Read More
                                      </a>
                                    </div>
                                  </div>
                                  
                                </div>
                                   )
                                })}
                              </div>
                            </div>
                          </section>
    </main>

    <Footer/>
    </>
  )
}

export default Projects

