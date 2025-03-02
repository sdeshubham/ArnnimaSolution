"use client";

import ProjectsCard from "./ProjectsCard";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState, useEffect } from "react";
import Select from "react-select";
import dynamic from "next/dynamic";

const Projects = () => {
  const projectData = [
    // {
    //   id: "web",
    //   imageSrc: "/ZurichKotak.png",
    //   title: "Insurance Platform for Zurich Kotak",
    //   desc: "A sophisticated insurance management system tailored to provide users with financial security solutions.",
    // },
    {
      id: "web",
      imageSrc: "/AgroOrbit.png",
      title: "Agricultural Solutions for Agro Orbit",
      desc: "An agricultural platform offering solutions to improve crop yields and farm management.",
    },
    {
      id: "product",
      imageSrc: "/HezkyTech.png",
      title: "Innovative Solutions for Hezky Tech",
      desc: "A technology solutions company offering innovative software and hardware products across multiple industries.",
    },
    {
      id: "product",
      imageSrc: "/Locum.png",
      title: "Healthcare Staffing Solutions for Locum",
      desc: "A healthcare staffing platform that connects medical professionals with temporary positions in hospitals and clinics.",
    },
    {
      id: "mobile",
      imageSrc: "/OttoBuddy.png",
      title: "Otto Buddy",
      desc: "A smart vehicle assistant application offering real-time traffic updates, vehicle diagnostics, and driving assistance.",
    },
    {
      id: "mobile",
      imageSrc: "/JedloApp.png",
      title: "Food Delivery Platform for JedloApp",
      desc: "A robust food delivery application providing users with a wide selection of restaurants and cuisines.",
    },
    {
      id: "product",
      imageSrc: "/Orthodontics.png",
      title: "Dental Health Platform for VC Orthodontics",
      desc: "A comprehensive platform offering orthodontic solutions with seamless online appointment scheduling and patient management tools.",
    },
    {
      id: "web",
      imageSrc: "/Cyberquess.png",
      title: "Cyberquess",
      desc: "A leading provider of cybersecurity services and solutions, Cyberquess specializes in safeguarding businesses against digital threats with advanced security tools, monitoring, and response strategies.",
    },
    {
      id: "uiux",
      imageSrc: "/GasGuzzler.png",
      title: "Gas Guzzler",
      desc: "A premier online car auction platform for classic, vintage, and collector vehicles.",
    },
    {
      id: "web",
      imageSrc: "/ICICILombardOzonePlus.png",
      title: "ICICI Lombard Ozone Plus",
      desc: "A premier online car auction platform for classic, vintage, and collector vehicles.",
    },
    {
      id: "web",
      imageSrc: "/Roboquess.png",
      title: "Roboquess",
      desc: "Roboquess specializes in delivering advanced robotics and automation solutions for industries.",
    },
    {
      id: "mobile",
      imageSrc: "/FisheyeHub.png",
      title: "Creative Media Platform for Fisheye Hub",
      desc: "Roboquess specializes in delivering advanced robotics and automation solutions for industries.",
    },
    {
      id: "web",
      imageSrc: "/VakilsPreMedia.png",
      title: "Vakils Pre Media",
      desc: "A digital publishing platform providing end-to-end solutions for printing and media needs, including pre-press, design, and publishing services.",
    },
    {
      id: "web",
      imageSrc: "/TuVozNow.png",
      title: "Tu Voz Now",
      desc: "An innovative media platform designed for broadcasting news, opinions, and entertainment.",
    },
    {
      id: "web",
      imageSrc: "/VitalLab.png",
      title: "Medical Testing Solutions for Vital Lab",
      desc: "A healthcare company specializing in medical testing and laboratory services.",
    },
    {
      id: "mobile",
      imageSrc: "/Fundacle.png",
      title: "Fundacle",
      desc: "An online crowdfunding platform that helps startups, charities, and projects raise funds from a wide audience.",
    },
    {
      id: "product",
      imageSrc: "/MrecordPatient.png",
      title: "Patient Management System for Mrecord Patient",
      desc: "A comprehensive patient management platform designed for healthcare providers.",
    },
    {
      id: "uiux",
      imageSrc: "/PoorvaHolidays.png",
      title: "Poorva Holidays",
      desc: "Poorva Holidays is a travel and tourism company that offers personalized vacation packages, flight bookings, and hotel accommodations for domestic and international trips.",
    },
    {
      id: "development",
      imageSrc: "/DellaInternational.png",
      title: "Luxury Hospitality for Della International",
      desc: "Della International is a luxury hospitality and adventure resort offering world-class experiences, including five-star accommodations, dining, and extreme adventure activities.",
    },
    {
      id: "uiux",
      imageSrc: "/NestPro.png",
      title: "Nestpro - Your Professional Partner for Seamless Solutions",
      desc: "At Nestpro, we specialize in delivering high-quality freelance solutions tailored to meet your specific needs.",
    },
    // {
    // id: "mobile",
    //   imageSrc: "/StreamFlix.png",
    //   title: "Entertainment Platform for StreamFlix",
    //   desc: "StreamFlix is a premier OTT platform offering a vast library of movies, TV shows, documentaries, and original content.",
    // },
    {
      id: "uiux",
      imageSrc: "/FlyMate.png",
      title: "Flight Booking Solutions for FlyMate",
      desc: "FlyMate is a comprehensive flight booking platform that provides users with easy access to flight schedules, ticket booking, seat selection, and real-time updates.",
    },
    {
      id: "mobile",
      imageSrc: "/TutorApp.jpeg",
      title: "Your Learning Partner",
      desc: "At Tutot, we believe that every learner deserves personalized guidance to unlock their full potential.",
    },
    {
      id: "mobile",
      imageSrc: "/VFApp.png",
      title: "VF: Discover, Dance, and Connect",
      desc: "FlyMate is a comprehensive flight booking platform that provides users with easy access to flight schedules, ticket booking, seat selection, and real-time updates.",
    },
    {
      id: "mobile",
      imageSrc: "/FisheyApp.jpeg",
      title: "Fishey App",
      desc: "Fishey is an innovative mobile app designed to simplify attendance tracking for students and staff.",
    },

    // {
    //   imageSrc: "/Selas.png",
    //   title: "Selas: Your School Management Hub",
    //   desc: "Selas is a comprehensive school management panel designed to streamline communication and organization within educational institutions.",
    // },
    {
      id: "development",
      imageSrc: "/Avant.png",
      title: "Avant: The Art of Diamonds",
      desc: "At Avant, we celebrate the timeless beauty of diamonds. Our curated collection features exquisite stones crafted to perfection, showcasing elegance and luxury.",
    },
    {
      id: "mobile",
      imageSrc: "/BurnFit.png",
      title: "BurnFit: Your Ultimate Fitness Companion",
      desc: "BurnFit is your go-to app for achieving fitness goals and embracing a healthier lifestyle.",
    },
    {
      id: "mobile",
      imageSrc: "/My11Star.png",
      title: "My11Star: Play. Compete. Win.",
      desc: "My11Star is your premier fantasy sports app, designed to bring the thrill of competitive play to your fingertips.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("uiux");

  const [isMounted, setIsMounted] = useState(false);
  // ---------------------------

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 2 + filteredProjects.length) % filteredProjects.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % filteredProjects.length);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  const filteredProjects = projectData.filter(
    (project) => project.id === selectedCategory
  );
  const visibleProjects = filteredProjects.slice(
    currentIndex,
    currentIndex + 2
  );

  // Update selected category based on dropdown selection
  const handleDropdownChange = (selectedOption) => {
    setValue(selectedOption);
    handleFilter(selectedOption.value); // Apply the filter when a new option is selected
  };

  const [value, setValue] = useState("uiux");

  const options = [
    { value: "uiux", label: "UI/UX Design" },
    { value: "web", label: "Web Application" },
    { value: "product", label: "Product Management" },
    { value: "development", label: "Development" },
    { value: "mobile", label: "Mobile Application" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="projectBox" id="projects">
      <div className="projects-top">
        <div className="filter-bar">
          <div className="projFilter">
            <ul>
              <li
                className={selectedCategory === "uiux" ? "default-red" : ""}
                onClick={() => handleFilter("uiux")}
              >
                UI/UX Design
              </li>
              <li
                className={selectedCategory === "web" ? "default-red" : ""}
                onClick={() => handleFilter("web")}
              >
                Web Application
              </li>
              <li
                className={selectedCategory === "product" ? "default-red" : ""}
                onClick={() => handleFilter("product")}
              >
                Product Management
              </li>
              <li
                className={
                  selectedCategory === "development" ? "default-red" : ""
                }
                onClick={() => handleFilter("development")}
              >
                Development
              </li>
              <li
                className={selectedCategory === "mobile" ? "default-red" : ""}
                onClick={() => handleFilter("mobile")}
              >
                Mobile Application
              </li>
            </ul>
          </div>

          {/* <div className="filterDropdown">
            <Select
              options={options}
              defaultValue={value}
              onChange={setValue}
              className="proFilterdropdown"
            />
          </div> */}

          {/* <div className="filterDropdown">
            <Select
              options={options}
              value={value}
              onChange={handleDropdownChange}
              className="proFilterdropdown"
            />
          </div> */}
          <div className="filterDropdown">
            <Select
              options={options}
              value={value}
              onChange={handleDropdownChange}
              placeholder="UI/UX Design"
              className="customDropdown"
              classNamePrefix="customDropdown"
            />
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
