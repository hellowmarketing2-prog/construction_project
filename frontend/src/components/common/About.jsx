import React from 'react'
import Aboutimg from "../../assets/images/about-us.jpg";
const About = () => {
  return (
    <section className="section-2 py-5">
              <div className="container py-5">
                <div className="row">
                  <div className="col-md-6">
                    <img src={Aboutimg} alt="About Us" className="img-fluid" />
                  </div>
    
                  <div className="col-md-6">
                    <span>About Us</span>
                    <h2>Crafting structures that last a lifetime</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nihil qui natus itaque quia odio et, vero quod quasi .
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt, error repellat eveniet fuga saepe sint doloribus
                      exercitationem qui, magni sed tempore facere minima
                      recusandae. Odio quasi laborum possimus dolorem officia,
                      explicabo unde!
                    </p>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default About
