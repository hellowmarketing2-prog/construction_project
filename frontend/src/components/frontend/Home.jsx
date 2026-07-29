import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header from "../common/Header";
import About from "../common/About";
import Footer from "../common/Footer";
import Serviceimg from "../../assets/images/construction1.jpg";

import constructionimg from "../../assets/images/construction2.jpg";
import Blogimg from "../../assets/images/construction3.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import "swiper/css";
import "swiper/css/pagination";
import { apiUrl, token } from "../common/http";
import LatestServices from "../common/LatestServices";
import LatestProjects from "../common/LatestProjects";
import LatestArticles from "../common/LatestArticles";
import ShowTestimonials from "../common/ShowTestimonials";
const Home = () => {

  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Constuctions</span>
                <h1>
                  Crafting dreams with <br /> precision and excellence.
                </h1>
                <p>
                  We are a team of dedicated professionals committed to
                  delivering exceptional <br /> construction services that
                  exceed our clients' expectations.
                </p>
                <div className="mt-4">
                  <a href="#contact" className="btn btn-primary large">
                    Contact Now
                  </a>
                  <a href="#contact" className="btn btn-secondary large ms-2">
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About us section */}

        <About />

        {/* Our services section */}
        {/* <section className="section-3 bg-light py-5">
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
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image ">
                    <img src={Serviceimg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Residential Construction</h3>
                    </div>

                    <div className="service-content ">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas, doloremque.
                      </p>
                    </div>
                    <a href="#contact" className="btn btn-primary mt-3 small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image ">
                    <img src={Serviceimg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Residential Construction</h3>
                    </div>

                    <div className="service-content ">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas, doloremque.
                      </p>
                    </div>
                    <a href="#contact" className="btn btn-primary mt-3 small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image ">
                    <img src={Serviceimg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Residential Construction</h3>
                    </div>

                    <div className="service-content ">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas, doloremque.
                      </p>
                    </div>
                    <a href="#contact" className="btn btn-primary mt-3 small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image ">
                    <img src={Serviceimg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Residential Construction</h3>
                    </div>

                    <div className="service-content ">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas, doloremque.
                      </p>
                    </div>
                    <a href="#contact" className="btn btn-primary mt-3 small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <LatestServices/>

        {/* why chose us section */}
        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center ">
              <span>Why chose Us</span>
              <h2>Discover our wide variety of projects</h2>
              <p>
                We have a wide variety of projects that we have completed for
                our clients. We have a team of experienced professionals <br />{" "}
                who are dedicated to delivering high-quality work and
                exceptional customer service.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} />
                  </div>

                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <div>
                    <p>
                      Small actions create big impact Lorem ipsum, dolor sit
                      amet consectetur adipisicing elit. Repellendus voluptate
                      repellat officiis!{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon2} />
                  </div>

                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <div>
                    <p>
                      Small actions create big impact Lorem ipsum, dolor sit
                      amet consectetur adipisicing elit. Repellendus voluptate
                      repellat officiis!{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon3} />
                  </div>

                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <div>
                    <p>
                      Small actions create big impact Lorem ipsum, dolor sit
                      amet consectetur adipisicing elit. Repellendus voluptate
                      repellat officiis!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LatestProjects/>

        <ShowTestimonials/>
        {/* Blogs section  */}

        {/* <section className="section-6 bg-light py-5">
          <div className="container">
          <div className="section-header text-center ">
          <span>Blog & News</span>
          <h2>Articles & blog posts</h2>
          <p>
          We offer a wide range of construction services to meet all your
          needs.
          </p>
          </div>
          <div className="row pt-3">
          <div className="col-md-4">
          <div className="card shadow border-0">
          <div className="card-img-top">
          <img src={Blogimg} alt="" className="w-100"/>
          </div>
          <div className="card-body p-3">
          <div className="mb-3">
          <a href="#" className="title">Dummy Blog title</a>
          
          </div>
          <div>
          <a href="" className="btn btn-primary small">Read More</a>
          </div>
          
          </div>
          </div>
          </div>
          <div className="col-md-4">
          <div className="card shadow border-0">
          <div className="card-img-top">
          <img src={Blogimg} alt="" className="w-100"/>
          </div>
          <div className="card-body p-3">
                    <div className="mb-3">
                    <a href="#" className="title">Dummy Blog title</a>

                    </div>
                    <div>
                      <a href="" className="btn btn-primary small">Read More</a>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={Blogimg} alt="" className="w-100"/>
                    </div>
                  <div className="card-body p-3">
                    <div className="mb-3">
                    <a href="#" className="title">Dummy Blog title</a>

                    </div>
                    <div>
                      <a href="" className="btn btn-primary small">Read More</a>
                    </div>

                  </div>
                  </div>
              </div>
            </div>
          </div>
        </section> */}
<LatestArticles />
      </main>
      <Footer />
    </>
  );
};

export default Home;





