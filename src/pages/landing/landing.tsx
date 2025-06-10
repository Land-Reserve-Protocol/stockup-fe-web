import "../../App.css";
import Hero from "../../components/landing-page-components/hero";
import CoreFeatures from "../../components/landing-page-components/features";
import HowItWorks from "../../components/landing-page-components/how-it-works";
import Roadmap from "../../components/landing-page-components/roadmap";
import Community from "../../components/landing-page-components/join-community";

function Landing() {
  return (
    <div>
      <Hero />
      <CoreFeatures />
      <HowItWorks />
      <Roadmap />
      <Community />
    </div>
  );
}

export default Landing;
