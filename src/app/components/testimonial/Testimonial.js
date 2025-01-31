import "./Testimonial.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import TestiCard from "./TestiCard";

const Testimonial = () => {
  const testimonialData = [
    {
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going.",
      imgsrc: "/images/testimonial-profile.png",
      name: "Maya Prajapati",
      role: "Node Developer",
    },
    {
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going.",
      imgsrc: "/Images/testimonial-profile.png",
      name: "Maya Prajapati",
      role: "Node Developer",
    },
    {
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going.",
      imgsrc: "/Images/testimonial-profile.png",
      name: "Maya Prajapati",
      role: "Node Developer",
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
              <GoDotFill className="doticon" /> <br />
              What Our Partner Says
              <GoDotFill className="doticon" />
            </h3>
          </div>
          <div className="testi-right">
            <CiCircleChevLeft className="testi-icon" />
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