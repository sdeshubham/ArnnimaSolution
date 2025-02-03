import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import "./Partner.css";

const Partner = () => {
  return (
    <>
      <div className="partnerBox">
        <div className="partner-top">
          <h2>
            Our Associations & Partnerships
            <GoDotFill className="doticon" />
          </h2>
          <div id="horizontalLine"></div>
        </div>
        <div className="partner-pic">
          <div className="partner-img">
            <Image
              src={"/MicrosoftAzure.png"}
              alt="Business image"
              width={100}
              height={30}
              priority
            />
            <Image
              src={"/AWSamazon.png"}
              alt="Business image"
              width={100}
              height={50}
              priority
            />
            <Image
              src={"/Adobe.png"}
              alt="Business image"
              width={100}
              height={30}
              priority
            />
            <Image
              src={"/Liferay.png"}
              alt="Business image"
              width={100}
              height={30}
              priority
            />
            <Image
              src={"/Strapi.png"}
              alt="Business image"
              width={100}
              height={30}
              priority
            />
            <Image
              src={"/Directus.png"}
              alt="Business image"
              width={90}
              height={35}
              priority
            />
            <Image
              src={"/contentful.png"}
              alt="Business image"
              width={90}
              height={22}
              priority
            />
            <Image
              src={"/OpenAI.png"}
              alt="Business image"
              width={100}
              height={30}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
