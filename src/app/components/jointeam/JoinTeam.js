import "./JoinTeam.css";
import { GoDotFill } from "react-icons/go";
import JoinTeamCard from "./JoinTeamCard";

const JoinTeam = () => {
  const joinTeamData = [
    {
      title: "Java Developer",
      trend: "Top Trending",
      employer: "Arnnima",
      department: "IT",
      level: "Entery-Level",
      location: "Mumbai Maharashtra",
    },
    {
      title: "Flutter Developer",
      trend: "Top Trending",
      employer: "Arnnima",
      department: "IT",
      level: "Entery-Level",
      location: "Noida Uttar Pradesh",
    },
    {
      title: "ReactJs Developer",
      trend: "Top Trending",
      employer: "Arnnima",
      department: "IT",
      level: "Entery-Level",
      location: "Gurgaon Haryana",
    },
  ];

  return (
    <>
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
            possible, everyday!
          </p>
        </div>
        <div className="joinTeamCards">
          {joinTeamData.map((join, index) => (
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
      </div>
    </>
  );
};

export default JoinTeam;
