import { GoDotFill } from "react-icons/go";
import "./CaseStudies.css";

const CaseStudies = () => {
  return (
    <>
      <div className="case-stidies-container">
        <div className="caseStudiesBox">
          <div className="caseStuleft">
            <h4>Case Studies</h4>
            <h2 className="expred-flag">
              Proven <span className="exp-fff-text">Expertise</span>
              <GoDotFill className="doticon" />
              Proven Results
              <GoDotFill className="doticon" />
            </h2>
          </div>
          <div className="caseStuRight">
            <div>
              <p>
                Our data-driven approach and innovative strategies have helped{" "}
                countless businesses achieve their goals. We're dedicated to{" "}
                delivering measurable results
              </p>
              <button>Explore All Projects</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
