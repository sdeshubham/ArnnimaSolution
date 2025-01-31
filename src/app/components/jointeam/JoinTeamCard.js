const JoinTeamCard = ({
  title,
  trend,
  employer,
  department,
  level,
  location,
}) => {
  return (
    <div className="joinTeamCardBox">
      <div className="joinUsCard">
        <div className="card-head">
          <h3 className="join-title">{title}</h3>
          <p className="join-trend">{trend}</p>
        </div>

        <div className="card-details">
          <p className="join-employer">
            <span className="label">Employer:</span> {employer}
          </p>
          <p className="join-department">
            <span className="label">Department:</span> {department}
          </p>
          <p className="join-level">
            <span className="label">Level:</span> {level}
          </p>
          <p className="join-location">
            <span className="label">Location:</span> {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinTeamCard;
