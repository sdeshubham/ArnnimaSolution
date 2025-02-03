// import "./JoinTeam.css";
// import { GoDotFill } from "react-icons/go";
// import JoinTeamCard from "./JoinTeamCard";

// const JoinTeam = () => {
//   const joinTeamData = [
//     {
//       title: "Java Developer",
//       trend: "Top Trending",
//       employer: "Arnnima",
//       department: "IT",
//       level: "Entery-Level",
//       location: "Mumbai Maharashtra",
//     },
//     {
//       title: "Flutter Developer",
//       trend: "Top Trending",
//       employer: "Arnnima",
//       department: "IT",
//       level: "Entery-Level",
//       location: "Noida Uttar Pradesh",
//     },
//     {
//       title: "ReactJs Developer",
//       trend: "Top Trending",
//       employer: "Arnnima",
//       department: "IT",
//       level: "Entery-Level",
//       location: "Gurgaon Haryana",
//     },
    
//   ];

//   return (
//     <>
//       <div className="joinTeamBox">
//         <div className="joinTeam-head">
//           <h2>
//             Join Our Team
//             <GoDotFill className="doticon" />
//           </h2>
//           <div id="horizontalLine"></div>
//           <p>
//             What began as our founder’s vision is now becoming the benchmark for
//             hiring across India. Meet the visionary team who is making it
//             possible, everyday!
//           </p>
//         </div>
//         <div className="joinTeamCards">
//           {joinTeamData.map((join, index) => (
//             <JoinTeamCard
//               key={index}
//               title={join.title}
//               trend={join.trend}
//               employer={join.employer}
//               department={join.department}
//               level={join.level}
//               location={join.location}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default JoinTeam;

"use client";

import "./JoinTeam.css";
import { GoDotFill } from "react-icons/go";
import JoinTeamCard from "./JoinTeamCard";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";

const JoinTeam = () => {
  const joinTeamData = [
    {
      title: "Java Developer",
      trend: "Top Trending",
      employer: "Arnnima",
      department: "IT",
      level: "Entry-Level",
      location: "Mumbai Maharashtra",
    },
    {
      title: "Flutter Developer",
      trend: "Top Trending",
      employer: "Arnnima",
      department: "IT",
      level: "Entry-Level",
      location: "Noida Uttar Pradesh",
    },
    {
      title: "ReactJs Developer",
      trend: "Top Trending",
      employer: "Arnnima",
      department: "IT",
      level: "Entry-Level",
      location: "Gurgaon Haryana",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + joinTeamData.length) % joinTeamData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % joinTeamData.length);
  };

  const visibleJoinTeam = joinTeamData.slice(currentIndex, currentIndex + 3);

  return (
    <div className="joinTeamBox">
      <div className="joinTeam-head">
        <h2>
          Join Our Team
          <GoDotFill className="doticon" />
        </h2>
        <div id="horizontalLine"></div>
        <p>
          What began as our founder’s vision is now becoming the benchmark for
          hiring across India. Meet the visionary team who is making it
          possible, every day!
        </p>
      </div>
      <div className="joinTeamCards">
        {visibleJoinTeam.map((join, index) => (
          <JoinTeamCard
            key={index}
            title={join.title}
            trend={join.trend}
            employer={join.employer}
            department={join.department}
            level={join.level}
            location={join.location}
          />
        ))}
      </div>
      <div className="jointeam-icons">
        <CiCircleChevLeft className="projleftIcon" onClick={handlePrev} />
        <CiCircleChevRight className="projrightIcon" onClick={handleNext} />
      </div>
    </div>
  );
};

export default JoinTeam;
