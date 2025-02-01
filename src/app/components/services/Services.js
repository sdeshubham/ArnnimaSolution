import { GoDotFill } from "react-icons/go";
import "./Services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData = [
    {
      imageSrc: "/images/SEOpic.png",
      description: "Search Engine Optimization",
    },
    {
      imageSrc: "/images/SoftwareDpic.png",
      description: "Software Development",
    },
  ];

  const serviceDataTwo = [
    {
      imageSrc: "/images/ProductDevelopment.png",
      description: "Product Development",
    },
    {
      imageSrc: "/images/MobileApp.png",
      description: "Mobile App Developement",
    },
    {
      imageSrc: "/images/DevOps.png",
      description: "DevOps Services",
    },
    {
      imageSrc: "/images/CH2.png",
      description: "C2H",
    },
  ];

  return (
    <>
      <div className="servicesBox">
        <div className="servicesBoxOne">
          <div className="servBoxtop">
            <div className="suite-serv">
              <h3 className="serviceHthre">
                Our Digital <br /> Suite of Services
                <GoDotFill className="doticon" />
              </h3>
              <p>
                We harness innovative strategies tailored to your unique needs.
                Our <br /> targeted marketing solutions ensure that your message
                reaches the right audience effectively.
              </p>
            </div>
            <div className="servicesContainer">
              {serviceData.map((service, index) => (
                <ServiceCard
                  key={index}
                  imageSrc={service.imageSrc}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="servicesBoxTwo">
          <div className="servicesContainerTwo">
            {serviceDataTwo.map((service, index) => (
              <ServiceCard
                key={index}
                imageSrc={service.imageSrc}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
