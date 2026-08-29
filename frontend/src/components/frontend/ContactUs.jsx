import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { useForm } from "react-hook-form";
import { apiUrl } from "../common/http";
import { toast } from "react-toastify";
import useAnimationReveal from "../../hooks/useAnimation";
const ContactUs = () => {
  useAnimationReveal();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const res = await fetch(apiUrl + "contact_now", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.status == true) {
      toast.success(result.message);
      reset();
    } else {
      toast.error(result.message);
    }
  };
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
          <div className="section-header text-center" data-reveal="fade-up">
            <span>Get In Touch</span>
            <h2>Contact Us</h2>
            <p>
              We have a wide variety of projects that we have completed for our
              clients. Reach out to us for any construction needs.
            </p>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-3" data-reveal="fade-right">
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
              <div className="col-md-9" data-reveal="fade-left">
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <form onSubmit={handleSubmit(onsubmit)}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className="form-label">
                            Name
                          </label>

                          <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            {...register("name", {
                              required: "The name field is required",
                            })}
                          />

                          {errors.name && (
                            <div className="invalid-feedback">
                              {errors.name.message}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 mb-4">
                          <label className="form-label">Email</label>

                          <input
                            type="email"
                            placeholder="Email"
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                            {...register("email", {
                              required: "The email field is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address",
                              },
                            })}
                          />

                          {errors.email && (
                            <div className="invalid-feedback form-control-lg">
                              {errors.email.message}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className="form-label">
                            Phone
                          </label>
                          <input
                            type="text"
                            {...register("phone")}
                            className="form-control form-control-lg"
                            placeholder="Phone No."
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className="form-label">
                            Subject{" "}
                          </label>
                          <input
                            type="text"
                            {...register("subject")}
                            className="form-control form-control-lg"
                            placeholder="Subject"
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="form-label">
                            Message{" "}
                          </label>

                          <textarea
                            {...register("message")}
                            rows={4}
                            className="form-control form-control-lg"
                            placeholder="Your message"
                            id=""
                          ></textarea>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className={`premium-send-btn ${isSubmitting ? "is-sending" : ""}`}
                        disabled={isSubmitting}
                      >
                        <span className="btn-bg"></span>

                        {!isSubmitting ? (
                          <span className="btn-idle">
                            <span>Send Message</span>
                          </span>
                        ) : (
                          <span className="btn-sending">
                            {/* Animated envelope */}
                            <span className="mail-animation">
                              <svg
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="8"
                                  y="16"
                                  width="48"
                                  height="34"
                                  rx="6"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                />

                                <path
                                  className="mail-left"
                                  d="M10 20L32 37L54 20"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />

                                <path
                                  className="mail-right"
                                  d="M10 48L25 34"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                />

                                <path
                                  className="mail-right"
                                  d="M54 48L39 34"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>

                            {/* Status */}
                            <span className="sending-status">
                              <span className="status-main">
                                Sending Email
                                <span className="animated-dots">
                                  <i></i>
                                  <i></i>
                                  <i></i>
                                </span>
                              </span>

                              <span className="status-sub">Please wait...</span>
                            </span>
                          </span>
                        )}

                        {/* Progress animation */}
                        {isSubmitting && (
                          <span className="sending-progress"></span>
                        )}
                      </button>
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
