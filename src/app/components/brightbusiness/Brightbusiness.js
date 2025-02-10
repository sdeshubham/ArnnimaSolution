import Image from "next/image";
import "./Brightbusiness.css";
import { GoDotFill } from "react-icons/go";

const Brightbusiness = () => {
  return (
    <div className="bussiBox">
      <div className="bussiBoxTop">
        <h2 className="bussiBoxTop-head">
          We Make your Business Bright
          <GoDotFill className="doticon"/>
        </h2>
        <div id="horizontalLine"></div>
        <p>
          Support small business and join the world wide like USA, Canada,
          Singapore, Dubai movement to encourage commercial support for the
          millions of minority owned businesses helping world economy
        </p>
      </div>
      <div className="bussiSecondBox">
        <div className="bussiBoxLeft">
          <div className="bussiCont">
            <div className="bussiLeft-boxone">
              <div id="vertiLine"></div>
              <div className="bussin-num">
                <h3>64 +</h3>
                <p>
                  Projects <br /> Completed
                </p>
              </div>
            </div>

            <div className="bussiLeft-boxone customer19">
              <div id="vertiLine"></div>
              <div className="bussin-num">
                <h3>19 +</h3>
                <p>
                  Happy <br /> Customers
                </p>
              </div>
            </div>
          </div>

          <div className="bussiContTwo">
            <div className="bussiLeft-boxone bussiLeft-second-one">
              <div id="vertiLine"></div>
              <div className="bussin-num">
                <h3>10 +</h3>
                <p>
                  Years <br /> Experienced
                </p>
              </div>
            </div>

            <div className="bussiLeft-boxone bussiLeft-second-two">
              <div id="vertiLine"></div>
              <div className="bussin-num">
                <h3>5 +</h3>
                <p>
                  Products in <br /> Queue
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bussiBoxRight">
          <Image
            src={"/businessImg.png"}
            className="brightBussiImg"
            alt="Business image"
            width={760}
            height={798}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Brightbusiness;
