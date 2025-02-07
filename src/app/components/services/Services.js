import { GoDotFill } from "react-icons/go";
import "./Services.css";
import ServiceCard from "./ServiceCard";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Services = () => {
  const serviceData = [
    {
      imageSrc: "/SEOpic.png",
      description: "Search Engine Optimization",
    },
    {
      imageSrc: "/SoftwareDpic.png",
      description: "Software Development",
    },
  ];

  const serviceDataTwo = [
    {
      imageSrc: "/ProductDevelopment.png",
      description: "Product Development",
    },
    {
      imageSrc: "/MobileApp.png",
      description: "Mobile App Developement",
    },
    {
      imageSrc: "/DevOps.png",
      description: "DevOps Services",
    },
    {
      imageSrc: "/CH2.png",
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
        <div className="service-slider-btns">
          <div className="next-previewIcon">
            <CiCircleChevLeft className="projleftIcon" />
            <CiCircleChevRight className="projrightIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
