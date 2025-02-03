import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import "./components/navbar/Navbar";
import Brightbusiness from "./components/brightbusiness/Brightbusiness";
import Partner from "./components/partners/Partner";
import Services from "./components/services/Services";
import WhoWeAre from "./components/whoWeAre/WhoWeAre";
import CaseStudies from "./components/caseStudies/CaseStudies";
import Projects from "./components/projects/Projects";
import Testimonial from "./components/testimonial/Testimonial";
import JoinTeam from "./components/jointeam/JoinTeam";
import Blogs from "./components/blogs/Blogs";
import Marketing from "./components/marketing/Marketing"
import Contact from "./components/contactus/Contact";
import Footer from "./components/footer/Footer";
import Topsection from "./components/topsection/Topsection";

export default function Home() {
  return (
    <div className="page">
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
  );
}
