import Image from "next/image";
import "./Brightbusiness.css";
import { PiLineVertical } from "react-icons/pi";

const Brightbusiness = () => {
  return (
    <div className="bussiBox">
      <div className="bussiBoxTop">
        <h2>We Make your Business Bright.</h2>
        <p>
          Support small business and join the world wide like USA, Canada,
          Singapore, Dubai movement to encourage commercial support for the
          millions of minority owned businesses helping world economy.
        </p>
      </div>
      <div className="bussiLeft">
        <div className="bussiBoxLeft">
          <div className="bussiCont">
            <div className="bussiLeft-boxone">
              <PiLineVertical className="bussiLine" />
              <div>
                <div className="bussin-num">
                  <h3>64 +</h3>
                  <p>Projects Completed</p>
                </div>
                {/* <div className="bussi-subHead">
                  <p>Projects Completed</p>
                </div> */}
              </div>
            </div>

            <div className="bussiLeft-boxone">
              <PiLineVertical className="bussiLine" />
              <div>
                <div className="bussin-num">
                  <h3>19 +</h3>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bussiContTwo">
            <div className="bussiLeft-boxone">
              <PiLineVertical className="bussiLine" />
              <div>
                <div className="bussin-num">
                  <h3>10 +</h3>
                  <p>Years Experienced</p>
                </div>
              </div>
            </div>

            <div className="bussiLeft-boxone">
              <PiLineVertical className="bussiLine" />
              <div>
                <div className="bussin-num">
                  <h3>5 +</h3>
                  <p>Products in Queue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bussiBoxRight">
          <Image
            src="/images/businessImg.png"
            alt="Business image"
            width={680}
            height={700}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Brightbusiness;
