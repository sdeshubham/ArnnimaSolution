import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-bgContainer">
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
                {/* <div className="footer-logoBox">
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
                        LinkedIn
                      </a>
                      <a href="https://x.com/arnnima19">Twitter</a>
                      <a href="https://medium.com/@arnnima">Medium</a>
                    </div>
                  </div>
                  <div className="footer-bottom">
                    <p>
                      Copyright &copy; 2025 by Arnnima. All rights reserved.
                    </p>
                  </div>
                </div> */}

                <div className="footer-logoBox">
                  <div className="footer-logoBoxOne">
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
                        We're a team of experienced designers, <br />{" "}
                        developers, and marketers, passionate <br />
                        about delivering exceptional digital solutions.
                      </p>
                    </div>
                  </div>

                  <div className="footer-logoBoxTwo">
                    <div className="socialicons-footer">
                      <div className="social-icons">
                        <a href="https://www.linkedin.com/company/105600390/admin/dashboard/">
                          LinkedIn
                        </a>
                        <a href="https://x.com/arnnima19">Twitter</a>
                        <a href="https://medium.com/@arnnima">Medium</a>
                      </div>
                    </div>
                    <div className="footer-bottom">
                      <p>
                        Copyright &copy; 2025 by Arnnima. All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="footerOptions">
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
                      <li>
                        <a href="/">iOS App Development</a>
                      </li>
                      <li>
                        <a href="/">Android App Development</a>
                      </li>
                      <li>
                        <a href="/">Ideation & Design</a>
                      </li>
                      <li>
                        <a href="/">Research & Innovation</a>
                      </li>
                      <li>
                        <a href="/">Digital Transformation</a>
                      </li>
                      <li>
                        <a href="/">PWA</a>
                      </li>
                      <li>
                        <a href="/">Genrative AI</a>
                      </li>
                      <li>
                        <a href="/">Custom CRM</a>
                      </li>
                      <li>
                        <a href="/">IoT Development</a>
                      </li>
                      <li>
                        <a href="/">IT Outsourcing Services</a>
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
                      <li>
                        <a href="/">Telecom</a>
                      </li>
                      <li>
                        <a href="/">Travel</a>
                      </li>
                      <li>
                        <a href="/">Real-Estate</a>
                      </li>
                      <li>
                        <a href="/">Insurance</a>
                      </li>
                      <li>
                        <a href="/">News</a>
                      </li>
                      <li>
                        <a href="/">Agriculture</a>
                      </li>
                      <li>
                        <a href="/">Social Networking</a>
                      </li>
                      <li>
                        <a href="/">Event</a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="footer-section">
                      <h4>Compare</h4>
                      <ul>
                        <li>
                          <a href="#">Arnnima Vs. Fiverr</a>
                        </li>
                        <li>
                          <a href="#">Arnnima Vs. Credo</a>
                        </li>
                        <li>
                          <a href="#">Arnnima Vs. Freelancer</a>
                        </li>
                        <li>
                          <a href="#">Arnnima Vs. Freeup</a>
                        </li>
                        <li>
                          <a href="#">Arnnima Vs. PeoplePerHour</a>
                        </li>
                        <li>
                          <a href="#">Arnnima Vs. Guru</a>
                        </li>
                        <li>
                          <a href="#">Arnnima Vs. Andela</a>
                        </li>
                        <li>
                          <a href="#">Arnnima Vs. Upwork</a>
                        </li>
                        <li>
                          <a href="#">Arnnima Vs. Super Sourcing</a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-section">
                      <h4>Support</h4>
                      <ul>
                        <li>
                          <Link href="/privacy">Privacy & Policy</Link>
                        </li>
                        <li>
                          <Link href="/terms">Terms & Conditions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="footer-bottom">
              <div id="footer-bottom-horizontalLine"></div>
              <p>Copyright &copy; 2025 by Arnnima. All rights reserved.</p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
