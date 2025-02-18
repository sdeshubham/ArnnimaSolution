import "./Footer.css";
import Image from "next/image";
// import { GoArrowRight } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

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
              <a href="mailto:suraj@sovtechnologies.com">
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
              </a>
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
                      width={165}
                      height={50}
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
                <div className="socialicons-footer">
                  <div className="social-icons">
                    <a href="https://www.linkedin.com/company/105600390/admin/dashboard/">
                      <FaLinkedinIn className="social-iconsfooter" />
                    </a>
                    <a href="https://x.com/arnnima19">
                      <FaXTwitter className="social-iconsfooter" />
                    </a>
                    <a href="https://medium.com/@arnnima">
                      <FaMedium className="social-iconsfooter" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="footerOptions">
                <div className="footerOption-sectionOne">
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
                    <h4>Services</h4>
                    <ul>
                      <li>
                        <a href="#">Search Engine Optimization</a>
                      </li>
                      <li>
                        <a href="/">Software Development</a>
                      </li>
                      <li>
                        <a href="/">Product Development</a>
                      </li>
                      <li>
                        <a href="/">Mobile App Developement</a>
                      </li>
                      <li>
                        <a href="#">DevOps Services</a>
                      </li>
                      <li>
                        <a href="/">C2H</a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-section">
                    <h4>Technologies</h4>
                    <ul>
                      <li>
                        <a href="#">Blockchain</a>
                      </li>
                      <li>
                        <a href="/">Artificial intelligence (AI)</a>
                      </li>
                      <li>
                        <a href="/">AR and VR</a>
                      </li>
                      <li>
                        <a href="/">Cloud Computing</a>
                      </li>
                      <li>
                        <a href="#">Internet of Things (IoT)</a>
                      </li>
                      <li>
                        <a href="/">Metaverse Development</a>
                      </li>
                      <li>
                        <a href="/">NFT development</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="footerOption-sectionOTwo">
                  <div className="footer-section">
                    <h4>Industries</h4>
                    <ul>
                      <li>
                        <a href="#">Healthcare</a>
                      </li>
                      <li>
                        <a href="/">Education</a>
                      </li>
                      <li>
                        <a href="/">SaaS</a>
                      </li>
                      <li>
                        <a href="/">Finance</a>
                      </li>
                      <li>
                        <a href="#">On-Demand</a>
                      </li>
                      <li>
                        <a href="/">eCommerce</a>
                      </li>
                      <li>
                        <a href="/">Logistics</a>
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
                        <Link href="/privacy">Privacy & Policy</Link>
                      </li>
                      <li>
                        <Link href="/terms">Terms & Conditions</Link>
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
