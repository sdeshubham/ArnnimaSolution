import "./Services.css";
import Image from "next/image";

const ServiceCard = ({ imageSrc, description }) => {
  return (
    <div className="card servCardText">
      <Image
        src={imageSrc}
        alt="Business image"
        width={74}
        height={67.83}
        objectFit="contain"
        priority
      />
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
