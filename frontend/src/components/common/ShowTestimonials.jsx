import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { apiUrl, fileUrl } from "./http";
import useAnimationReveal from "../../hooks/useAnimation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const swiperRef = useRef(null);
  useAnimationReveal();

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

  const renderTestimonialCard = (testimonial) => (
    <div className="card shadow border-0 h-100">
      <div className="card-body p-4">
        {/* Rating */}
        <div className="ratting">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
        </div>

        {/* Testimonial */}
        <div className="content pt-3 pb-2">
          <p>{testimonial.testimonial}</p>
        </div>

        <hr />

        {/* User Info */}
        <div className="d-flex align-items-center meta">
          <div className="flex-shrink-0">
            {testimonial.image && (
              <img
                src={fileUrl + "uploads/testimonials/" + testimonial.image}
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

          <div className="ps-3">
            <div className="name">{testimonial.citation}</div>
            <div className="designation">{testimonial.designation}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="section-5 py-5">
      <div className="container">
        <div className="section-header text-center" data-reveal="fade-up">
          <span>Testimonials</span>
          <h2>What people are saying about us</h2>
          <p>
            We offer Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ullam neque libero animi.
          </p>
        </div>

        <div className="testimonials-carousel" data-reveal="fade-up">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                {renderTestimonialCard(testimonial)}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="testimonial-nav-arrows">
            <button
              className="testimonial-arrow testimonial-prev"
              aria-label="Previous testimonial"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="testimonial-arrow testimonial-next"
              aria-label="Next testimonial"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;