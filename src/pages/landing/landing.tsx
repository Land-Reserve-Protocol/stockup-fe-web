import "../../App.css";
import Hero from "../../components/landing-page-components/hero";
import CoreFeatures from "../../components/landing-page-components/features";
import HowItWorks from "../../components/landing-page-components/how-it-works";
import Roadmap from "../../components/landing-page-components/roadmap";
import Community from "../../components/landing-page-components/join-community";
import Footer from "../../components/landing-page-components/footer";
import image from "../../assets/newest.webp";
import Core from "../../components/landing-page-components/core";

function Landing() {
  return (
    <div className="wrapper">
      {/* <picture> */}
      <img
        src={image}
        className="parallax-image"
        loading="eager"
        fetchPriority="high"
      />
      {/* </picture> */}
      <Hero />
      <Core />
      <CoreFeatures />
      <HowItWorks />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
}

export default Landing;
