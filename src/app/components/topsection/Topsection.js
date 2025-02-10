"use client";

import { useState, useEffect } from "react";
import "./Topsection.css";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const Topsection = () => {
  const [textIndex, setTextIndex] = useState(0);

  const textOptions = [
    "Brand",
    "Product",
    "Tech Team",
    "Website",
    "Mobile App",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="topsection">
          <div className="mainsection">
            <div className="main-content">
              <div className="mainsec-left">
                <div className="mainsec-boxOne">
                  {/* <div className="top-headingH1">
                  <h1 className="red-flag">
                    Make Your{" "}
                    <span className="top-brand">{textOptions[textIndex]}</span>{" "}
                    <br />
                  </h1>
                  <h1>
                    with{" "}
                    <div className="text-container">
                      Arnnima
                      <span className="dot"></span>
                    </div>{" "}
                    Solutions
                    <GoDotFill className="doticon" />
                  </h1>
                </div> */}
                  <div className="top-headingH1">
                    <h1 className="red-flag">
                      Make Your{" "}
                      <span className="top-brand">
                        {textOptions[textIndex]}
                      </span>{" "}
                      <br />
                      with Arnnima Solutions
                    </h1>
                  </div>
                  <p>
                    We craft premium digital work for web, mobile and
                    experiential with creative agencies <br /> and global brands
                    alike putting passion, pride and plenty of elbow grease into{" "}
                    <br /> everything we do.<span>.</span>
                  </p>
                </div>
                <div>
                  <button className="getStartBtn">Get Started</button>
                </div>
              </div>
              <div className="mainsec-right">
                <Image
                  src={"/mainsectionimg.png"}
                  className="main-image"
                  alt="Main Section"
                  width={392}
                  height={426}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topsection;
