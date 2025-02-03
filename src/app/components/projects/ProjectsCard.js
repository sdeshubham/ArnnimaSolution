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
