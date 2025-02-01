import Image from "next/image";
import "./Marketing.css";

const Marketing = () => {
  return (
    <>
      <div className="marketingBox">
        <div className="marketLeft">
          <h4>Bright</h4>
          <h2>
            Ready to brand Up <br /> Your Marketing
            <span className="qustion-mark">?</span>
          </h2>
          <p className="market-desc">
            We’re here to help you take your brand to the next level. Let’s
            craft a strategy that’s as bright as your future.
          </p>
          <button className="market-btn">Book a Free Consultation</button>
        </div>

        <div className="marketRight">
          <Image
            src="/images/marketing-image.png"
            className="market-img"
            alt="marketing-image"
            width={550}
            height={280}
          />
        </div>
      </div>
    </>
  );
};


export default Marketing;