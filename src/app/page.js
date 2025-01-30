import Navbar from "./components/navbar/Navbar";
import "./components/navbar/Navbar";
import Brightbusiness from "./components/brightbusiness/Brightbusiness";
import Partner from "./components/partners/Partner";
import Services from "./components/services/Services";
import WhoWeAre from "./components/whoWeAre/WhoWeAre";
import CaseStudies from "./components/caseStudies/CaseStudies";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Brightbusiness />
      <Partner />
      <Services />
      <WhoWeAre />
      <CaseStudies />
      <Projects />
    </div>
  );
}
