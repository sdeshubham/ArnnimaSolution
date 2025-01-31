import Image from "next/image";
import "./Testimonial.css";

const TestiCard = ({ content, imgsrc, name, role }) => {
  return (
    <>
      <div className="testiCard">
        <p className="testi-content">{content}</p>
        <div className="testiCardBottom">
          <Image
            className="testiPic"
            src={imgsrc}
            alt="Business image"
            height={50}
            width={50}
            priority
          />
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
