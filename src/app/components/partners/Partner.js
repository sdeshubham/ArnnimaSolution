import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import "./Partner.css";

const Partner = () => {
  return (
    <>
      <div className="partner-component">
        <div className="partnerBox">
          <div className="partner-top">
            <h2>
              Our Associations & Partnerships
              <GoDotFill className="doticon" />
            </h2>
            <div id="partnerHorizontalLine"></div>
          </div>
          <div className="partner-pic">
            <div className="partner-img">
              <Image
                src={"/MicrosoftAzure.png"}
                className="partner-pic"
                alt="Business image"
                width={100}
                height={30}
                priority
              />
              <Image
                src={"/AWSamazon.png"}
                className="partner-pic"
                alt="Business image"
                width={100}
                height={50}
                priority
              />
              <Image
                src={"/Adobe.png"}
                className="partner-pic"
                alt="Business image"
                width={100}
                height={30}
                priority
              />
              <Image
                src={"/Liferay.png"}
                className="partner-pic"
                alt="Business image"
                width={100}
                height={30}
                priority
              />
              <Image
                src={"/Strapi.png"}
                className="partner-pic"
                alt="Business image"
                width={100}
                height={30}
                priority
              />
              <Image
                src={"/Directus.png"}
                className="partner-pic"
                alt="Business image"
                width={90}
                height={35}
                priority
              />
              <Image
              src={"/contentful.png"}
              className="partner-pic"
              alt="Business image"
              width={90}
              height={20}
              priority
            />
              <Image
                src={"/OpenAI.png"}
                className="partner-pic"
                alt="Business image"
                width={100}
                height={30}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
