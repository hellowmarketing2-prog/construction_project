
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { apiUrl, fileUrl } from "./http";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch(apiUrl + "get_testimonials", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      const result = await res.json();

      if (result.status === true) {
        setTestimonials(result.data);
      }
    } catch (error) {
      console.log("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <section className="section-5 py-5">
      <div className="container">
        <div className="section-header text-center">
          <span>Testimonials</span>

          <h2>What people are saying about us</h2>

          <p>
            We offer Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ullam neque libero animi.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            200:{
              slidesPerView:1,
              spaceBetween:20,
            },
            768:{
              slidesPerView:2,
              spaceBetween:20,
            },
            1024:{
              slidesPerView:3,
              spaceBetween:50,
            }
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="card shadow border-0">
                <div className="card-body p-5">

                  {/* Rating */}
                  <div className="ratting">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="content pt-4 pb-2">
                    <p>{testimonial.testimonial}</p>
                  </div>

                  <hr />

                  {/* User Info */}
                  <div className="d-flex meta">
                    <div>
                      {testimonial.image && (
                        <img
                          src={
                            fileUrl +
                            "uploads/testimonials/" +
                            testimonial.image
                          }
                          alt={testimonial.citation}
                          width="50"
                          height="50"
                          style={{
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                    </div>

                    <div className="ps-2">
                      <div className="name">
                        {testimonial.citation}
                      </div>

                      <div>
                        {testimonial.designation}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
