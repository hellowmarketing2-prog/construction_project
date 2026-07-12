import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import Serviceimg from "../../assets/images/construction1.jpg";
import { apiUrl, fileUrl } from '../common/http';

const Services = () => {
   const [services, setServices] = useState([]);
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
    <Header/>
    <Hero preHeading='Quality . Itigrity . Value'
         heading='Services' 
         text=' We are a team of dedicated professionals committed to
                  delivering exceptional
                    <br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                  consectetur officiis?'/>

     <section className="section-3 bg-light py-5">
              <div className="container py-5">
                <div className="section-header text-center ">
                  <span>Our Services</span>
                  <h2>Our Construction Services</h2>
                  <p>
                    We offer a wide range of construction services to meet all your
                    needs.
                  </p>
                </div>
                <div className="row pt-4">
                   { 
                              services &&
                                services.map((service) => {
                                  return(
                                  <div className="col-md-4 col-lg-4">
                                    <div className="item">
                                      <div className="service-image ">
                                        <img src={`${fileUrl}uploads/services/small/${service.image}`} className="w-100" />
                                      </div>
                                      <div className="service-body">
                                        <div className="service-title">
                                          <h3>{service.title}</h3>
                                        </div>
                  
                                        <div className="service-content ">
                                          <p>
                                            {service.short_desc}
                                          </p>
                                        </div>
                                        <a href="#contact" className="btn btn-primary mt-3 small">
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
    <Footer/>
    </>
  )
}

export default Services
