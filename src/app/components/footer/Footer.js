import "./Footer.css";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footerBox">
        <div className="footer-top">
          <div className="footer-head">
            <h2>
              Let’s discuss and bring your <br /> vision to life.
            </h2>
            <button>
              Let's Talk
              <Image
                  src="/images/talkArrow.png"
                  alt="logo"
                  className="talkArrow-icon"
                  width={20}
                  height={12}
                />

              {/* <GoArrowRight className="footerTalkIcon" /> */}
            </button>
          </div>
          <div id="footer-horizontalLine"></div>
        </div>

        <div className="footer-mid">

          <div className="footer-logoBox">
            <div className="footerLogo">
              <Link href="/">
                <Image
                  src="/images/ArnnimaLogo.svg"
                  alt="logo"
                  width={120}
                  height={45}
                />
              </Link>
            </div>
            <div className="footerLogoContent">
              <p>
                We're a team of experienced designers, <br /> developers, and
                marketers, passionate <br />
                about delivering exceptional digital solutions.
              </p>
            </div>
          </div>

          <div className="footerOptions">
          <div className="footer-section">
            <h4>Menu</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Project</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Privacy & Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social Media</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Dribbble</a></li>
              <li><a href="#">Behance</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Compare</h4>
            <ul>
              <li><a href="#">Arnnima Vs. Turing</a></li>
              <li><a href="#">Arnnima Vs. Andela</a></li>
              <li><a href="#">Arnnima Vs. Upwork</a></li>
            </ul>
          </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div id="footer-bottom-horizontalLine"></div>
          <p>Copyright &copy; 2025 by Arnnima. All rights reserved.</p>

        </div>
      </div>
    </>
  );
};

export default Footer;
