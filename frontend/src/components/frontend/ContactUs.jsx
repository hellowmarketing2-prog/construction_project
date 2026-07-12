import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality . Itigrity . Value"
          heading="Contact Us"
          text=" We are a team of dedicated professionals committed to
                  delivering exceptional
                    <br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                  consectetur officiis?"
        />

        <section className="section-9 py-5">
          <div className="section-header text-center ">
            <span></span>
            <h2>Contact Us</h2>
            <p>
              We have a wide variety of projects that we have completed for our
              clients. We have a team of <br />
              who are dedicated to delivering high-quality work and exceptional
            </p>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-3">
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-4">
                    <h3>Call Us</h3>
                    <div>
                      <a href="#">(xxxxxxxxxxx)</a>
                    </div>
                    <div>
                      <a href="#">(xxxxxxxxxxx)</a>
                    </div>

                    <h3 className="mt-4">You can write us</h3>
                    <div>
                      <a href="#">example@gmail.com</a>
                    </div>
                    <div>
                      <a href="#">info@gmail.com</a>
                    </div>

                    <h3 className="mt-4">Address</h3>
                    <div>
                      B-13x, Dijkot FaisalAbad Punjab Pakistan , 220099
                      10044987999
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <form action="">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Name"
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className="form-label">
                            Email
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Email"
                          />
                      </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className="form-label">
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Phone No."
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className="form-label">
                            Subject                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Subject"
                          />
                      </div>
                      <div>
                         <label htmlFor="" className="form-label">
                            Message                          </label>
                            <textarea name="" rows={4} className="form-control form-control-lg"
                            placeholder="Your message" id=""></textarea>
                     
                      </div>
</div>
                     <button className="btn btn-primary mt-5 large">Submit</button> 

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
