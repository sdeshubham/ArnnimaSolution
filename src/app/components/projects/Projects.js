// import "./Projects.css";
// import ProjectsCard from "./ProjectsCard";

// const Projects = () => {
//   const projectData = [
//     {
//       imageSrc: "/images/SEO.png",
//       title: "Search Engine Optimization",
//       desc: "lasjhf lashf ;lhasd f;lasd;l fas;ldhf;lahsdflhasdkfh",
//     },
//     {
//       imageSrc: "/images/SEO.png",
//       title: "Search Engine Optimization",
//       desc: "lasjhf lashf ;lhasd f;lasd;l fas;ldhf;lahsdflhasdkfh",
//     },
//   ];

//   return (
//     <>
//       <div className="projectBox">
//         <div className="projFilter">
//           <ul>
//             <li>UI/UX Design</li>
//             <li>Web Application</li>
//             <li>Product Management</li>
//             <li>Development</li>
//             <li>Mobile Application</li>
//           </ul>
//         </div>

//         <div className="projectCardBox">
//           {projectData.map((service, index) => (
//             <ProjectsCard
//               key={index}
//               imageSrc={service.imageSrc}
//               title={service.title}
//               desc={service.desc}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projectData = [
    {
      imageSrc: "/ProjectImageOne.png",
      title: "Search Engine Optimization",
      desc: "A sneaker brand focused on high-performance shoes for athletes was struggling to differentiate its products in a saturated market and boost sales among competitive runners.",
    },
    {
      imageSrc: "/ProjectImageTwo.png",
      title: "Search Engine Optimization",
      desc: "A new game console brand wanted to generate buzz and excitement ahead of its product launch, targeting both casual gamers and hardcore gaming communities.",
    },
  ];

  return (
    <>
      <div className="projectBox">
        <div className="projFilter">
          <ul>
            <li className="default-red">UI/UX Design</li>
            <li>Web Application</li>
            <li>Product Management</li>
            <li>Development</li>
            <li>Mobile Application</li>
          </ul>
        </div>

        <div className="projectCardBox">
          {projectData.map((service, index) => (
            <ProjectsCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
