// import Image from "next/image";
// import { GoDotFill } from "react-icons/go";
// import "./Partner.css";

// const Partner = () => {
//   return (
//     <>
//       <div className="partner-component">
//         <div className="partnerBox">
//           <div className="partner-top">
//             <h2>
//               Our Associations & Partnerships
//               <strong className="red-point">.</strong>
//             </h2>
//             <div id="partnerHorizontalLine"></div>
//           </div>
//           <div className="partner-picBox">
//             <div className="partner-img">
//               <Image
//                 src={"/MicrosoftAzure.png"}
//                 className="partner-pic"
//                 alt="Business image"
//                 width={100}
//                 height={30}
//                 priority
//               />
//               <Image
//                 src={"/AWSamazon.png"}
//                 className="partner-pic"
//                 alt="Business image"
//                 width={100}
//                 height={50}
//                 priority
//               />
//               <Image
//                 src={"/Adobe.png"}
//                 className="partner-pic"
//                 alt="Business image"
//                 width={100}
//                 height={30}
//                 priority
//               />
//               <Image
//                 src={"/Liferay.png"}
//                 className="partner-pic"
//                 alt="Business image"
//                 width={100}
//                 height={30}
//                 priority
//               />
//               <Image
//                 src={"/Strapi.png"}
//                 className="partner-pic"
//                 alt="Business image"
//                 width={100}
//                 height={30}
//                 priority
//               />
//               <Image
//                 src={"/Directus.png"}
//                 className="partner-pic"
//                 alt="Business image"
//                 width={90}
//                 height={35}
//                 priority
//               />
//               <Image
//                 src={"/contentful.png"}
//                 className="partner-pic"
//                 alt="Business image"
//                 width={90}
//                 height={20}
//                 priority
//               />
//               <Image
//                 src={"/OpenAI.png"}
//                 className="partner-pic"
//                 alt="Business image"
//                 width={100}
//                 height={30}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Partner;

// import Image from "next/image";
// import "./Partner.css";

// const Partner = () => {
//   const images = [
//     "/MicrosoftAzure.png",
//     "/AWSamazon.png",
//     "/Adobe.png",
//     "/Liferay.png",
//     "/Strapi.png",
//     "/Directus.png",
//     "/contentful.png",
//     "/OpenAI.png",
//   ];

//   return (
//     <div className="partner-component">
//       <div className="partnerBox">
//         <div className="partner-top">
//           <h2>
//             Our Associations & Partnerships<strong className="red-point">.</strong>
//           </h2>
//           <div id="partnerHorizontalLine"></div>
//         </div>
//         <div className="partner-picBox">
//           <div className="partner-img">
//             {[...images, ...images].map((src, index) => (
//               <Image
//                 key={index}
//                 src={src}
//                 className="partner-pic"
//                 alt="Business partner"
//                 width={100}
//                 height={30}
//                 priority
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partner;

import Image from "next/image";
import "./Partner.css";

const Partner = () => {
  // const images = [
  //   "AWSlogo.png",
  //   "Azurelogo.png",
  //   "/MicrosoftAzure.png",
  //   "/AWSamazon.png",
  //   "/Adobe.png",
  //   "/Liferay.png",
  //   "/Strapi.png",
  //   "/Directus.png",
  //   "/contentful.png",
  //   "/OpenAI.png",
  // ];

  const images = [
    "AWSlogo.png",
    "Azurelogo.png",
    "/Adobelogo.png",
    "/Liferaylogo.png",
    "/Strapilogo.png",
    "/Directuslogo.png",
    "/contentfullogo.png",
    "/OpenAIlogo.png",
    "/TensorFlowlogo.png",
    "/Oraclelogo.png",
    "/MongoDBlogo.png",
    "/MySqllogo.png",
    "/MariaDBlogo.png",
    "/PowerBIlogo.png",
    "/tableaulogo.png",
    "/Jenkinslogo.png",
    "/Gitlogo.png",
    "/Bitbucketlogo.png",
    "/Kuberneteslogo.png",
    "/Dockerlogo.png",
  ];

  return (
    <div className="partner-component">
      <div className="partnerBox">
        <div className="partner-top">
          <h2>
            Our Associations & Partnerships
            <strong className="red-point">.</strong>
          </h2>
          <div id="partnerHorizontalLine"></div>
        </div>
        <div className="partner-picBox">
          <div className="partner-img">
            {[...images, ...images].map((src, index) => (
              <Image
                key={index}
                src={src}
                className="partner-pic"
                alt="Business partner"
                width={298}
                height={107}
                priority
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
