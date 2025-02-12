import "./Footer.css";
import Image from "next/image";
// import { GoArrowRight } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footerBox">
          <div className="footer-top">
            <div className="footer-head">
              <h2>
                Let’s discuss and bring your <br /> vision to life.
              </h2>
              <button className="footer-talk-btn">
                Let's Talk
                <Image
                  src={"/talkArrow.png"}
                  alt="logo"
                  className="talkArrow-icon"
                  width={15}
                  height={14}
                />
              </button>
            </div>
            <div id="footer-horizontalLine"></div>
          </div>

          <div className="footer-sectiontwpo">
            <div className="footer-mid">
              <div className="footer-logoBox">
                <div className="footerLogo">
                  <Link href="/">
                    <Image
                      src={"/ArnnimaLogo.svg"}
                      className="footer-logo"
                      alt="logo"
                      width={120}
                      height={45}
                    />
                  </Link>
                </div>
                <div className="footerLogoContent">
                  <p>
                    We're a team of experienced designers, <br /> developers,
                    and marketers, passionate <br />
                    about delivering exceptional digital solutions.
                  </p>
                </div>
              </div>

              <div className="footerOptions">
                <div className="footer-section">
                  <h4>Menu</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#services">Service</a>
                    </li>
                    <li>
                      <a href="#whoweare">About Us</a>
                    </li>
                    <li>
                      <a href="#projects">Project</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-section">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <a href="#">FAQ's</a>
                    </li>
                    <li>
                      <a href="#">Privacy & Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-section">
                  <h4>Social Media</h4>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/company/105600390/admin/dashboard/">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/arnnima19">Twitter</a>
                    </li>
                    <li>
                      <a href="https://medium.com/@arnnima">Medium</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-section">
                  <h4>Compare</h4>
                  <ul>
                    <li>
                      <a href="#">Arnnima Vs. Turing</a>
                    </li>
                    <li>
                      <a href="#">Arnnima Vs. Andela</a>
                    </li>
                    <li>
                      <a href="#">Arnnima Vs. Upwork</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div id="footer-bottom-horizontalLine"></div>
              <p>Copyright &copy; 2025 by Arnnima. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
