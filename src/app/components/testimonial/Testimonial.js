import "./Testimonial.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import TestiCard from "./TestiCard";

const Testimonial = () => {
  const testimonialData = [
    {
      content:
        "The team was absolutely fantastic! They worked closely with us to streamline our operations, offering smart and effective solutions. Their ongoing support has been invaluable in keeping everything running smoothly.",
      imgsrc: "/images/testiProfNew.jpg",
      name: "Wasif Khan",
      role: "CEO & Founder",
    },
    {
      content:
        "Incredible service from start to finish! They were highly knowledgeable, efficient, and tackled some tough challenges we faced. We’re incredibly happy with the results, and their team has been a great partner.",
      imgsrc: "/images/testiProfNew.jpg",
      name: "Avinash",
      role: "ABP Delivery Manager",
    },
    {
      content:
        "The team was fantastic throughout the entire process! They provided outstanding solutions that helped us streamline our operations. Additionally, their excellent ongoing support has made a significant impact on our business.",
      imgsrc: "/images/testiProfNew.jpg",
      name: "Mayank",
      role: "CEO & Founder",
    },
  ];

  return (
    <>
      <div className="testi-box">
        <div className="testi-head">
          <div className="testi-left">
            <h4>Testimonial</h4>
            <h3>
              Voices of Success
              <GoDotFill className="doticon" />
            </h3>
            <h3>
            What Our Partners Says
            <GoDotFill className="doticon" />
            </h3>
          </div>
          <div className="testi-right">
            <CiCircleChevLeft className="testi-icon" color="red" />
            <CiCircleChevRight className="testi-icon" />
          </div>
        </div>

        <div className="test-cards">
          {testimonialData.map((testi, index) => (
            <TestiCard
              key={index}
              content={testi.content}
              imgsrc={testi.imgsrc}
              name={testi.name}
              role={testi.role}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;