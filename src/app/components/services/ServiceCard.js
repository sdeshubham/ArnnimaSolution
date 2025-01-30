// import "./Services.css";
// import Image from "next/image";

// const ServiceCard = ({ Image, description }) => {
//   return (
//     <div className="card">
//       <Image
//         src="/images/MicrosoftAzure.png"
//         alt="Business image"
//         width={100}
//         height={30}
//         priority
//       />
//       <p>{description}</p>
//     </div>
//   );
// };

// export default ServiceCard;


import "./Services.css";
import Image from "next/image";

const ServiceCard = ({ imageSrc, description }) => {
  return (
    <div className="card">
      <Image
        src={imageSrc}
        alt="Business image"
        width={55}
        height={50}
        priority
      />
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
