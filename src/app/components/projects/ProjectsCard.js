// const ProjectsCard = ({ imageSrc, title, desc }) => {
//   return (
//     <>
//       <div className="projectCard">
//         <div className="card">
//           <Image
//             src={imageSrc}
//             alt="Business image"
//             width={55}
//             height={50}
//             priority
//           />
//           <h5>{title}</h5>
//           <p>{desc}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectsCard;

// import Image from "next/image";
// import "./Projects.css";

// const ProjectsCard = ({ imageSrc, title, desc }) => {
//   return (
//     <div className="projectCard">
//       <div className="proj-card">
//         <Image
//           src={imageSrc}
//           alt="Business image"
//           width={500}
//           height={600}
//           objectFit="cover"
//           priority
//         />
//         <h3>{title}</h3>
//         <p>{desc}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectsCard;

import "./Projects.css";
import Image from "next/image";

const ProjectCard = ({ imageSrc, title, desc }) => {
  return (
    <div className="projectCard">
      <div className="proj-card">
        <div className="projImgs">
          <Image
            className="projectImage"
            src={imageSrc}
            alt="Business image"
            priority
            fill
          />
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
