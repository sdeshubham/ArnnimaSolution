
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <>
      <div className="whoWeBox" id="whoweare">
        <div className="whoWeleft">
          <h4>
            About arnnima solutions
            <GoDotFill className="doticon dotPic" />
          </h4>
          <h2>
            Who We Are
            <GoDotFill className="doticon" />
          </h2>
          <p className="whoweOne">
            We’re all about illuminating your brand with bold, innovative
            marketing strategies. Our team combines creativity with cutting-edge
            technology to craft digital campaigns that captivate and convert.
            Whether you’re looking to grow your online presence or launch a new
            product, we’re here to help you shine.
          </p>
          <p className="whoweTwo">
            Our success is defined by the results we deliver. From innovative
            campaigns to record-breaking growth, we’ve partnered with brands to
            help them reach new height
          </p>
        </div>

        <div className="whoWeRight">
          <Image
            src={"/WhoWeAre.png"}
            className="whoWeImg"
            alt="Main Section"
            width={542}
            height={384.04}
          />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
