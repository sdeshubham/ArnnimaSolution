"use client";

import "./Testimonial.css";
import { GoDotFill } from "react-icons/go";
import TestiCard from "./TestiCard";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";

const Testimonial = () => {
  const testimonialData = [
    {
      content:
        "The team was absolutely fantastic! They worked closely with us to streamline our operations, offering smart and effective solutions. Their ongoing support has been invaluable in keeping everything running smoothly.",
      imgsrc: "/testiProfNew.jpg",
      name: "Wasif Khan",
      role: "CEO & Founder",
    },
    {
      content:
        "Incredible service from start to finish! They were highly knowledgeable, efficient, and tackled some tough challenges we faced. We’re incredibly happy with the results, and their team has been a great partner.",
      imgsrc: "/testiProfNew.jpg",
      name: "Avinash",
      role: "ABP Delivery Manager",
    },
    {
      content:
        "The team was fantastic throughout the entire process! They provided outstanding solutions that helped us streamline our operations. Additionally, their excellent ongoing support has made a significant impact on our business.",
      imgsrc: "/testiProfNew.jpg",
      name: "Mayank",
      role: "CEO & Founder",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 3 + testimonialData.length) % testimonialData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonialData.length);
  };

  const visibleTestimonials = testimonialData.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <>
      <div className="testi-container">
        <div className="testi-box" id="testimonial">
          <div className="testi-head">
            <div className="testi-left">
              <h4>Testimonial</h4>
              <h3>
                Voices of Success<strong className="red-point">.</strong>
                {/* <GoDotFill className="doticon" /> */}
              </h3>
              <h3>
                What Our Partners Says<strong className="red-point">.</strong>
                {/* <GoDotFill className="doticon" /> */}
              </h3>
            </div>
            <div className="testi-right">
              <CiCircleChevLeft className="projleftIcon" onClick={handlePrev} />
              <CiCircleChevRight
                className="projrightIcon"
                onClick={handleNext}
              />
            </div>
          </div>

          <div className="test-cards">
            {visibleTestimonials.map((testi, index) => (
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
      </div>
    </>
  );
};

export default Testimonial;
