import React, { useEffect, useState } from "react";
import Serviceimg from "../../assets/images/construction1.jpg";
import { apiUrl, fileUrl } from "./http";

const LatestServices = () => {
  const [services, setServices] = useState([]);
  const fetchlatestServices = async () => {
    const res = await fetch(apiUrl + "get_latest_services?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setServices(result.data);
  };
  useEffect(() => {
    fetchlatestServices();
  }, []);
  return (
    <>
      <section className="section-3 bg-light py-5">
        <div className="container-fluid py-5">
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
                <div key={service.id} className="col-md-3 col-lg-3">
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
    </>
  );
};

export default LatestServices;
