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
              src="/images/MicrosoftAzure.png"
              alt="Business image"
              width={100}
              height={30}
              priority
            />
            <Image
              src="/images/AWSamazon.png"
              alt="Business image"
              width={100}
              height={50}
              priority
            />
            <Image
              src="/images/Adobe.png"
              alt="Business image"
              width={100}
              height={30}
              priority
            />
            <Image
              src="/images/Liferay.png"
              alt="Business image"
              width={100}
              height={30}
              priority
            />
            <Image
              src="/images/Strapi.png"
              alt="Business image"
              width={100}
              height={30}
              priority
            />
            <Image
              src="/images/Directus.png"
              alt="Business image"
              width={100}
              height={30}
              priority
            />
            <Image
              src="/images/Contentful.png"
              alt="Business image"
              width={100}
              height={30}
              priority
            />
            <Image
              src="/images/OpenAI.png"
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
