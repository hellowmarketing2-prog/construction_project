import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
import { default as AboutNew } from "../common/About";
import ShowTestimonials from "../common/ShowTestimonials";
import Team from "../common/Team";

function About() {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality . Integrity . Value"
          heading="About Us"
          text="We are a team of dedicated professionals committed to delivering exceptional construction services."
        />
        <AboutNew />

        <Team />
        <ShowTestimonials />
      </main>
      <Footer />
    </>
  );
}

export default About;
