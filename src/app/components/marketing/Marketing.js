import Image from "next/image";
import "./Marketing.css";

const Marketing = () => {
  return (
    <>
      <div className="marketing-container">
        <div className="marketingBox">
          <div className="marketLeft">
            <h4>Bright</h4>
            {/* <p className="market-head">Ready to brand Up</p>
            <p className="market-head" style={{ margin: "-26px 0" }}>
              {" "}
              Your Marketing<span className="qustion-mark">?</span>
            </p> */}

            <p className="market-head">
              Ready to brand Up Your Marketing
              <span className="qustion-mark">?</span>
            </p>
            <p className="market-desc">
              We’re here to help you take your brand to the next level. Let’s
              craft a strategy that’s as bright as your future.
            </p>
            <a href="tel:+917738311925">
              <button className="market-btn">Book a Free Consultation</button>
            </a>
          </div>

          <div className="marketRight">
            <Image
              src={"/marketing-image.png"}
              className="market-img"
              alt="marketing-image"
              width={619}
              height={316}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
