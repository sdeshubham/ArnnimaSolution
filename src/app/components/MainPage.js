import "./MainPage.css"

import { Contact } from "lucide-react";
import Blogs from "./blogs/Blogs";
import Brightbusiness from "./brightbusiness/Brightbusiness";
import CaseStudies from "./caseStudies/CaseStudies";
import "./navbar/Navbar";
import JoinTeam from "./jointeam/JoinTeam";
import Marketing from "./marketing/Marketing";
import Navbar from "./navbar/Navbar";
import Partner from "./partners/Partner";
import Projects from "./projects/Projects";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";
import Topsection from "./topsection/Topsection";
import WhoWeAre from "./whoWeAre/WhoWeAre";
import Footer from "./footer/Footer";


const MainPage = () => {
  return (
    <div className="web-page">
      <div className="arnnimaMain">
        <Navbar />
        <Topsection />
        <Brightbusiness />
        <Partner />
        <Services />
        <WhoWeAre />
        <CaseStudies />
        <Projects />
        <Testimonial />
        <JoinTeam />
        <Blogs />
        <Marketing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default MainPage;