"use client";

import ProjectsCard from "./ProjectsCard";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";

const Projects = () => {
  const projectData = [
    {
      imageSrc: "/ZurichKotak.png",
      title: "Insurance Platform for Zurich Kotak",
      desc: "A sophisticated insurance management system tailored to provide users with financial security solutions.",
    },
    {
      imageSrc: "/AgroOrbit.png",
      title: "Agricultural Solutions for Agro Orbit",
      desc: "An agricultural platform offering solutions to improve crop yields and farm management.",
    },
    {
      imageSrc: "/HezkyTech.png",
      title: "Innovative Solutions for Hezky Tech",
      desc: "A technology solutions company offering innovative software and hardware products across multiple industries.",
    },
    {
      imageSrc: "/Locum.png",
      title: "Healthcare Staffing Solutions for Locum",
      desc: "A healthcare staffing platform that connects medical professionals with temporary positions in hospitals and clinics.",
    },
    {
      imageSrc: "/OttoBuddy.png",
      title: "Otto Buddy",
      desc: "A smart vehicle assistant application offering real-time traffic updates, vehicle diagnostics, and driving assistance.",
    },
    {
      imageSrc: "/JedloApp.png",
      title: "Food Delivery Platform for JedloApp",
      desc: "A robust food delivery application providing users with a wide selection of restaurants and cuisines.",
    },
    {
      imageSrc: "/Orthodontics.png",
      title: "Dental Health Platform for VC Orthodontics",
      desc: "A comprehensive platform offering orthodontic solutions with seamless online appointment scheduling and patient management tools.",
    },
    {
      imageSrc: "/Cyberquess.png",
      title: "Cyberquess",
      desc: "A leading provider of cybersecurity services and solutions, Cyberquess specializes in safeguarding businesses against digital threats with advanced security tools, monitoring, and response strategies.",
    },
    {
      imageSrc: "/GasGuzzler.png",
      title: "Gas Guzzler",
      desc: "A premier online car auction platform for classic, vintage, and collector vehicles.",
    },
    {
      imageSrc: "/ICICILombardOzonePlus.png",
      title: "ICICI Lombard Ozone Plus",
      desc: "A premier online car auction platform for classic, vintage, and collector vehicles.",
    },
    {
      imageSrc: "/Roboquess.png",
      title: "Roboquess",
      desc: "Roboquess specializes in delivering advanced robotics and automation solutions for industries.",
    },
    {
      imageSrc: "/FisheyeHub.png",
      title: "Creative Media Platform for Fisheye Hub",
      desc: "Roboquess specializes in delivering advanced robotics and automation solutions for industries.",
    },
    {
      imageSrc: "/VakilsPreMedia.png",
      title: "Vakils Pre Media",
      desc: "A digital publishing platform providing end-to-end solutions for printing and media needs, including pre-press, design, and publishing services.",
    },
    {
      imageSrc: "/TuVozNow.png",
      title: "Tu Voz Now",
      desc: "An innovative media platform designed for broadcasting news, opinions, and entertainment.",
    },
    {
      imageSrc: "/VitalLab.png",
      title: "Medical Testing Solutions for Vital Lab",
      desc: "A healthcare company specializing in medical testing and laboratory services.",
    },
    {
      imageSrc: "/Fundacle.png",
      title: "Fundacle",
      desc: "An online crowdfunding platform that helps startups, charities, and projects raise funds from a wide audience.",
    },
    {
      imageSrc: "/MrecordPatient.png",
      title: "Patient Management System for Mrecord Patient",
      desc: "A comprehensive patient management platform designed for healthcare providers.",
    },
    {
      imageSrc: "/PoorvaHolidays.png",
      title: "Travel Solutions for Poorva Holidays",
      desc: "Poorva Holidays is a travel and tourism company that offers personalized vacation packages, flight bookings, and hotel accommodations for domestic and international trips.",
    },
    {
      imageSrc: "/DellaInternational.png",
      title: "Luxury Hospitality for Della International",
      desc: "Della International is a luxury hospitality and adventure resort offering world-class experiences, including five-star accommodations, dining, and extreme adventure activities.",
    },
    {
      imageSrc: "/NestPro.png",
      title: "Nestpro - Your Professional Partner for Seamless Solutions",
      desc: "At Nestpro, we specialize in delivering high-quality freelance solutions tailored to meet your specific needs.",
    },
    // {
    //   imageSrc: "/StreamFlix.png",
    //   title: "Entertainment Platform for StreamFlix",
    //   desc: "StreamFlix is a premier OTT platform offering a vast library of movies, TV shows, documentaries, and original content.",
    // },
    {
      imageSrc: "/FlyMate.png",
      title: "Flight Booking Solutions for FlyMate",
      desc: "FlyMate is a comprehensive flight booking platform that provides users with easy access to flight schedules, ticket booking, seat selection, and real-time updates.",
    },
    {
      imageSrc: "/TutorApp.png",
      title: "Your Learning Partner",
      desc: "At Tutot, we believe that every learner deserves personalized guidance to unlock their full potential.",
    },
    {
      imageSrc: "/VFApp.png",
      title: "VF: Discover, Dance, and Connect",
      desc: "FlyMate is a comprehensive flight booking platform that provides users with easy access to flight schedules, ticket booking, seat selection, and real-time updates.",
    },
    {
      imageSrc: "/FisheyApp.png",
      title: "Fishey App",
      desc: "Fishey is an innovative mobile app designed to simplify attendance tracking for students and staff.",
    },

    // {
    //   imageSrc: "/Selas.png",
    //   title: "Selas: Your School Management Hub",
    //   desc: "Selas is a comprehensive school management panel designed to streamline communication and organization within educational institutions.",
    // },
    {
      imageSrc: "/Avant.png",
      title: "Avant: The Art of Diamonds",
      desc: "At Avant, we celebrate the timeless beauty of diamonds. Our curated collection features exquisite stones crafted to perfection, showcasing elegance and luxury.",
    },
    {
      imageSrc: "/BurnFit.png",
      title: "BurnFit: Your Ultimate Fitness Companion",
      desc: "BurnFit is your go-to app for achieving fitness goals and embracing a healthier lifestyle.",
    },
    {
      imageSrc: "/My11Star.png",
      title: "My11Star: Play. Compete. Win.",
      desc: "My11Star is your premier fantasy sports app, designed to bring the thrill of competitive play to your fingertips.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + projectData.length) % projectData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % projectData.length);
  };

  const visibleProjects = projectData.slice(currentIndex, currentIndex + 2);

  return (
    <div className="projectBox" id="projects">
      <div className="projects-top">
        <div className="filter-bar">
          <div className="projFilter">
            <ul>
              <li className="default-red">UI/UX Design</li>
              <li>Web Application</li>
              <li>Product Management</li>
              <li>Development</li>
              <li>Mobile Application</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projectCardBox">
        {visibleProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            desc={project.desc}
          />
        ))}
      </div>

      <div className="project-rightBox">
        <div className="next-previewIcon">
          <CiCircleChevLeft className="projleftIcon" onClick={handlePrev} />
          <CiCircleChevRight className="projrightIcon" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
