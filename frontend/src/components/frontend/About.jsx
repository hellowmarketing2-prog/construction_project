import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
// import Header from "../common/About";
import { default as AboutNew } from "../common/About";
import Blogimg from "../../assets/images/construction2.jpg";
import MemberImg from "../../assets/images/team1.jpg";
import ShowTestimonials from "../common/ShowTestimonials";
import Team from "../common/Team";
function About() {
  return (
    <>
      <Header />
      <main>
        <Hero preHeading='Quality . Itigrity . Value'
         heading='About Us' 
         text=' We are a team of dedicated professionals committed to
                  delivering exceptional
                    <br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                  consectetur officiis?'/>
        <AboutNew />

        
        <Team/>
        <ShowTestimonials/>
      </main>
      <Footer />
    </>
  );
}

export default About;
