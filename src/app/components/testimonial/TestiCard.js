import Image from "next/image";
import "./Testimonial.css";

const TestiCard = ({ content, imgsrc, name, role }) => {
  return (
    <>
      <div className="testiCard">
        <p className="testi-content">{content}</p>
        
        <div className="testiCardBottom">
          <div className="testi-profPic">
            <Image
              className="testimonialPic"
              src={imgsrc}
              alt="Business image"
              height={40}
              width={40}
              priority
            />
          </div>
          <div className="testi-bottom">
            <h5 className="testi-name">{name}</h5>
            <p className="testi-role">{role}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestiCard;
